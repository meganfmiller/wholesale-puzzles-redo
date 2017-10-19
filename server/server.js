const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , cors = require('cors')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    // , config =  require('./config')
    // , stripe = require('stripe')(config.secret_key)
    , app = module.exports = express();
require('dotenv').config()

app.use(bodyParser.json());
app.use(cors())

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, function (accessToken, refreshToken, extraParams, profile, done) {
    // db calls
    const db = app.get('db');
    console.log(profile.identities[0].user_id)
    //this long scary chain comes from the profile, which can be accessed by setting the breakpoint below. (See comment below)
    db.findUser([profile.identities[0].user_id]).then(user => {
        if (user[0]) {
            // console.log(user[0].auth_id)
            return done(null, user[0].id)
        } else {
            const user = profile._json
            db.createUser([user.name, user.email, user.identities[0].user_id])
                .then(user => {
                    console.log(user[0].id)
                    return done(null, user[0].id);
                })
        }
    })


}))

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/',
    failureRedirect: '/auth'
}))

app.get('/auth/me', (req, res) => {
    if (!req.user) {
        return res.status(404).send('User not found.')
    }
    // console.log(req.user)
    return res.status(200).send(req.user);
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/#/')
})

passport.serializeUser(function (id, done) {

    done(null, id); //what gets added to the session
})
passport.deserializeUser(function (id, done) {
    app.get('db').findCurrentUser([id])
        .then(user => {
            // console.log(user[0])
            done(null, user[0])
        })
})



app.get('/api/results/new', (req, res) => {
    app.get('db').getNewPuzzles()
        .then(response => {
            res.status(200).send(response)
        })
})

app.get('/api/results/3new', (req, res) => {
    app.get('db').get3NewPuzzles()
        .then(response => {
            // console.log('response', response)
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send(err)
        })
})

app.get('/api/results/3sale', (req, res) => {
    app.get('db').get3SalePuzzles()
        .then(response => {
            res.status(200).send(response)
        })
})

app.get('/api/results/1accessory', (req, res) => {
    app.get('db').get1Accessory()
        .then(response => {
            res.status(200).send(response)
        })
})

app.get('/api/results', (req, res) => {
    if (req.query.pieces) {
        if (req.query.pieces === 'large') {
            app.get('db').getLargePuzzles()
                .then(response => {
                    res.status(200).send(response)
                })
        } else {
            app.get('db').getPuzzlesByPiece([req.query.pieces])
                .then(response => {
                    // console.log('response', response)
                    res.status(200).send(response)
                })
        }
    } else if (req.query.theme) {
        app.get('db').getPuzzlesByTheme([req.query.theme])
            .then(response => {
                // console.log('response', response)
                res.status(200).send(response)
            })
    } else if (req.query.brand) {
        app.get('db').getPuzzlesByBrand([req.query.brand])
            .then(response => {
                // console.log('response', response)
                res.status(200).send(response)
            })
    } else if (req.query.artist) {
        app.get('db').getPuzzlesByArtist([req.query.artist])
            .then(response => {
                // console.log('response', response)
                res.status(200).send(response)
            })
    } else {
        app.get('db').getAllPuzzles()
            .then(response => {
                res.status(200).send(response)
            })
    }
})

app.get('/api/results/:item', (req, res) => {
    app.get('db').getProduct([req.params.item])
    .then(response => {
        // console.log(response)
        res.status(200).send(response[0])
    })
})

app.post('/api/payment', function (req, res, next) {
    //convert amount to pennies
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
        if (amountArray[i] === ".") {
            if (typeof amountArray[i + 1] === "string") {
                pennies.push(amountArray[i + 1]);
            } else {
                pennies.push("0");
            }
            if (typeof amountArray[i + 2] === "string") {
                pennies.push(amountArray[i + 2]);
            } else {
                pennies.push("0");
            }
            break;
        } else {
            pennies.push(amountArray[i])
        }
    }
    const convertedAmt = parseInt(pennies.join(''));

    const charge = stripe.charges.create({
        amount: convertedAmt, // amount in cents, again
        currency: 'usd',
        source: req.body.token.id,
        description: 'Test charge from react app'
    }, function (err, charge) {
        if (err) return res.sendStatus(500)
        return res.sendStatus(200);
        // if (err && err.type === 'StripeCardError') {
        //   // The card has been declined
        // }
    });
});




const port = 3001

app.listen(port, () => {
    console.log('We have ears on port:', port)
});
