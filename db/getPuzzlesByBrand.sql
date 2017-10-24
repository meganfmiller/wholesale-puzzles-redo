select * from puzzle
where brand = $1 and accessory = false
order by name asc;