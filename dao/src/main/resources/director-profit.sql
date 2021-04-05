SELECT DIRECTOR.*,
       AVG(BOX_OFFICE / BUDGET) as profit_multiplier,
       AVG(BOX_OFFICE - BUDGET) as profit_average
FROM DIRECTOR
         LEFT JOIN TITLE T on DIRECTOR.DIRECTOR_ID = T.DIRECTOR_ID
GROUP BY DIRECTOR.DIRECTOR_ID