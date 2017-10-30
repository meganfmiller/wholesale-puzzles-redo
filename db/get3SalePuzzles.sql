select * from puzzle
where sale = true
ORDER BY RANDOM()
limit 4;