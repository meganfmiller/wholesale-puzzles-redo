select * from puzzle
where (pieces = $1 or theme = $2 or brand = $3 or artist = $4)