
-- Create helper functions for incrementing and decrementing counts
CREATE OR REPLACE FUNCTION increment(x int) RETURNS int AS $$
  SELECT x + 1;
$$ LANGUAGE SQL IMMUTABLE;

CREATE OR REPLACE FUNCTION decrement(x int) RETURNS int AS $$
  SELECT GREATEST(0, x - 1);
$$ LANGUAGE SQL IMMUTABLE;
