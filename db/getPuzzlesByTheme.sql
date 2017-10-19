select * from puzzle
where theme = $1
order by name asc;