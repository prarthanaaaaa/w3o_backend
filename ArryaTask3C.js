const sales1 = [13 , 15, 20 , 50 , 35];
const sales2 = [400 ,346, 243 ,432 , 190];

function calculateTotalSales(dailysales)
{
    let totalsales = 0;
    
    for (let i=0; i<dailysales.length;i++)
    {
        totalsales+=dailysales[i];
    }
    return totalsales;
}

function calculateAverageDailySales(dailysales)
{
    let totalsales = calculateTotalSales(dailysales);
    return totalsales/dailysales.length;
}

function findBestSellingDay(dailysales)
{
    let maxsales = dailysales[0];
    let bestsellinday = 1;

    for (let i=1;i<dailysales.length;i++){
            if(dailysales[i]>maxsales)
            {
                maxsales=dailysales[i];
                bestsellinday+=1;
            }
    }
    return bestsellinday;
}

const totalsales1 = calculateTotalSales(sales1);
const average1 =calculateAverageDailySales(sales1);
const best1=findBestSellingDay(sales1);

const totalsales2 = calculateTotalSales(sales2);
const average2 =calculateAverageDailySales(sales2);
const best2=findBestSellingDay(sales2);

console.log('Sample sales data 1');
console.log('Total sales :',totalsales1);
console.log('Average sales',average1);
console.log('Best selling day :',best1);

console.log('Sample sales data 2');
console.log('Total sales :',totalsales2);
console.log('Average sales',average2);
console.log('Best selling day :',best2);
