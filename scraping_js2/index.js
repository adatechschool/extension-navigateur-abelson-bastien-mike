/* import fetch from 'node-fetch'
import cheerio from 'cheerio' */

const newestPrice=[]
const newestTitle=[]

function getPrice(html){
 const $ = cheerio.load(html)
 

 $(".a-offscreen:first",html).each(function(){
    //console.log('OOO', $(this).children());

    const newPrice = {
        id : newestPrice,
        title : $(this).text().trim(),
        url : `https://www.amazon.fr/${$(this).text()}`
    }
    newestPrice.push(newPrice)
 })
}


function getTitle(html){
    const $ = cheerio.load(html)
   
    $("#productTitle",html).each(function(){
       //console.log($(this).text())
   
       const newTitle = {
           id : newestTitle,
           title : $(this).text().trim(),
           url : `https://www.amazon.fr/${$(this).text()}`
       }
       newestTitle.push(newTitle)
    })
}

function getImg(html){
    const $ = cheerio.load(html)
   
    $(".a-spacing-small item imageThumbnail a-declarative",html).each(function(){
       //console.log($(this).text())
   
       const newImg = {
           id : newestProduct,
           title : $(this).text(),
           url : `https://www.amazon.fr/${$(this).text()}`
       }
       newestProduct.push(newImg)
    })
}


async function fetchdata(url){
    const response = await fetch(url)
    const data = await response.text()
     getPrice(data);
     getTitle(data);
     getImg(data)
    console.log(newestPrice);
    console.log(newestTitle)
    //chrome.runtime.sendMessage({ newestPrice, newestTitle });
    const productTitle = document.querySelector("#productName");
    const productPrice = document.querySelector("#productPrice");
  
    productTitle.textContent = `Titre du produit : ${newestTitle[0].title}`;
    productPrice.textContent = `Prix : ${newestPrice[0].title}`;
}

fetchdata("https://www.amazon.fr/dp/B09Y13TCNZ/ref=gw_fr_desk_sc_mso_btf_aucc_grw/?_encoding=UTF8&pd_rd_w=DJpAw&content-id=amzn1.sym.c79768d1-d56c-4be8-85e9-81f3d163517f&pf_rd_p=c79768d1-d56c-4be8-85e9-81f3d163517f&pf_rd_r=DH4PXKDE1NDQV82G9SQT&pd_rd_wg=zYEWv&pd_rd_r=e2024616-f6dc-4882-b56b-0c50d50a683f&ref_=pd_gw_unk")


