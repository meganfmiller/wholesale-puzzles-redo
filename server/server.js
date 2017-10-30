require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , cors = require('cors')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    // , config =  require('./config')
    // , stripe = require('stripe')(config.secret_key)
    , app = module.exports = express()
    , stripe = require('stripe')(process.env.PRIVATE_KEY);

app.use(express.static(`${__dirname}/../build`));
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
    // console.log(db);
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
    // console.log(profile.identities[0].user_id)
    //this long scary chain comes from the profile, which can be accessed by setting the breakpoint below. (See comment below)
    db.findUser([profile.identities[0].user_id]).then(user => {
        if (user[0]) {
            // console.log(user[0].auth_id)
            return done(null, user[0].id)
        } else {
            const user = profile._json
            db.createUser([user.name, user.email, user.identities[0].user_id])
                .then(user => {
                    // console.log(user[0].id)
                    return done(null, user[0].id);
                })
        }
    })


}))

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: '/#/',
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
    res.redirect(302, '/#/')
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
    // console.log('database', app.get('db'))
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

app.get('/api/results/sale', (req, res) => {
    app.get('db').getSalePuzzles()
        .then(response => {
            res.status(200).send(response)
        })
})

app.get('/api/results/3sale', (req, res) => {
    app.get('db').get3SalePuzzles()
        .then(response => {
            res.status(200).send(response)
        })
})

app.get('/api/results/accessories', (req, res) => {
    app.get('db').getAccessories()
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

app.get('/api/finder', (req, res) => {
    // console.log(req.query)
    var { pieces, theme, brand, artist } = req.query;
    // var keys = Object.keys(req.query);
    // console.log(keys)
    var params = [pieces, theme, brand, artist];
    var newParams = [];
    var count = 0;
    params.map((e, i) => {
        if (!e) {
            count++
            return newParams.push('')
        } else {
            return newParams.push(e.toUpperCase())
        }
    })
    
    theme ? newParams[1] = theme.replace(theme[0], theme[0].toUpperCase()) : null

    // console.log(params)
    if (artist) {
        var str = artist.split(' ')
        
            for(var i = 0; i < str.length; i++) {
                str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);        
            }
        
            var join = str.join(' ');
            // console.log(join)
    }
    
    
    artist ? newParams[3] = artist.replace(artist, join) : null
    
//  console.log(theme)

   
    
    // var filteredProperties = params.filter(e => e)
    // var filteredKeys = keys.filter(e => e)
    console.log(newParams)
    count === 3 ? app.get('db').oneQuery(newParams).then(response => {
        // console.log(response)
        var filtered = response.filter(e => {
            // console.log(e)
            if (pieces) {
                if (e.pieces === pieces) {
                    return true
                }
            }
            if (theme) {
                if (e.theme.toLowerCase() === theme.toLowerCase()) {
                    return true
                }
            }
            if (brand) {
                if (e.brand.toLowerCase() === brand) {
                    return true
                }
            }
            if (artist) {
                if (e.artist.toLowerCase() === artist) {
                    return true
                }
            }
        })
        res.status(200).send(filtered)
})
       
        : count === 2 ? app.get('db').twoQueries(newParams).then(response => {
            var filtered = response.filter(e => {
                if (pieces) {
                    if (e.pieces === pieces) {
                        return true
                    }
                }
                if (theme) {
                    if (e.theme.toLowerCase() === theme) {
                        return true
                    }
                }
                if (brand) {
                    if (e.brand.toLowerCase() === brand) {
                        return true
                    }
                }
                if (artist) {
                    if (e.artist.toLowerCase() === artist) {
                        return true
                    }
    
    
                }
            })
            res.status(200).send(filtered)
    })

    : count === 1 ? app.get('db').threeQueries(newParams).then(response => {
        var filtered = response.filter(e => {
            if (pieces) {
                if (e.pieces === pieces) {
                    return true
                }
            }
            if (theme) {
                if (e.theme.toLowerCase() === theme) {
                    
                    return true
                }
            }
            if (brand) {
                
                if (e.brand.toLowerCase() === brand) {
                    
                    return true
                }
            }
            if (artist) {
                if (e.artist.toLowerCase() === artist) {
                    
                    return true
                }


            }
        })
        res.status(200).send(filtered)
})
        : count === 0 ? app.get('db').fourQueries(newParams).then(response => {
            var filtered = response.filter(e => {
                if (pieces) {
                    if (e.pieces === pieces) {
                        
                        return true
                    }
                }
                if (theme) {
                    if (e.theme.toLowerCase() === theme) {
                        
                        return true
                    }
                }
                if (brand) {
                    if (e.brand.toLowerCase() === brand) {
                        
                        return true
                    }
                }
                if (artist) {
                    if (e.artist.toLowerCase() === artist) {
                        
                        return true
                    }
    
    
                }
            })
            res.status(200).send(filtered)
    })
            : res.status(500).send('Try Again')
})

app.post('/api/cart', (req, res) => {
    app.get('db').addToCart([req.body.userId, req.body.puzzleId])
        .then(response => {
            // console.log(response)
            res.status(200).send(response)
        })
})

app.delete('/api/cart:puzzleId', (req, res) => {
    app.get('db').removeFromCart([req.params.puzzleId])
        .then(response => {
            // console.log(response)
            res.status(200).send(response)
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
})

app.delete('/api/checkout/:userId', (req, res) => {
    app.get('db').checkout([req.params.userId])
    .then(response => {
        console.log(response)
        res.status(200).send(response)
    })
})
    
const path = require('path');
app.get('*', (req, res)=>{
  console.log("None Met");
  res.sendFile(path.join(__dirname, '..','build','index.html'));
})


const port = 3001

app.listen(port, () => {
    console.log('We have ears on port:', port)
});
