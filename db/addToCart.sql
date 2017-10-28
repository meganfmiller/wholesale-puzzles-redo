insert into cart (user_id, puzzle_id)
values ($1,$2);

select name, brand, accessory, sale, price, original_price, img, puzzle.id, pieces from puzzle
JOIN cart on (cart.puzzle_id = puzzle.id)
where user_id = $1;