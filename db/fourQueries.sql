select * from puzzle
where (artist like $4)
and (brand like $3 or artist like $4)
and (theme like $2 or brand like $3 or artist like $4)
and (pieces like $1 or theme like $2 or brand like $3 or artist like $4)