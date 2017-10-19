select * from puzzle
where new = true
ORDER BY RANDOM()
LIMIT 3;