select *
from customers
GO
select *
from signInLog
where hoursEarned !=0
GO


-- delete from customers where firstName = 'Benjamen'
-- truncate table signInLog