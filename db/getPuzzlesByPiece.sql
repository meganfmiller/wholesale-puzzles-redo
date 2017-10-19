select * from puzzle
where pieces = $1
order by name asc;