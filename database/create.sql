
GO
-- CREATE TABLE [customers]
-- (
--     [id] int NOT NULL IDENTITY,
--     [firstName] nvarchar(max) NOT NULL,
--     [lastname] nvarchar(max) NOT NULL,
--     [email] nvarchar(max) ,
--     [birthDate] nvarchar(max) ,
--     [streetAddress] nvarchar(max) ,
--     [city] nvarchar(max) ,
--     [state] nvarchar(max) ,
--     [zipCode] nvarchar(max) ,
--     CONSTRAINT [PK_Cust] PRIMARY KEY ([id])
-- );
-- GO
CREATE TABLE [signInLog]
(
    [id] int NOT NULL IDENTITY,
    [customerID] int NOT NULL,
    [inTime] DATETIME NOT NULL,
    [outTime] DATETIME NOT NULL,
    CONSTRAINT [PK_SignInLog] PRIMARY KEY ([id])
);
GO


--cycleProject@tccpsql.database.windows.net