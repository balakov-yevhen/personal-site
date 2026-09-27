// assets/js/api.js
(function (global) {
  'use strict';

  const sleep = (ms)=> new Promise(r=>setTimeout(r, ms));

  async function health(){
    await sleep(400 + Math.random()*500);
    return { status:"Healthy", version:"v1.2.3", latencyMs:Math.floor(80 + Math.random()*120), timestamp:new Date().toISOString() };
  }

  async function forexRates(){
    await sleep(350 + Math.random()*600);
    return {
      base:"USD", asOf:new Date().toISOString(),
      rates:{ USD:1, EUR:0.91 + Math.random()*0.02, UAH:40 + Math.random()*1.5, PLN:3.8 + Math.random()*0.1, GBP:0.76 + Math.random()*0.02, CHF:0.88 + Math.random()*0.02 }
    };
  }

  async function generateFile(kind, params){
    await sleep(600 + Math.random()*900);
    const now = new Date();
    const fileName = `${kind === "pdf" ? "invoice" : "report"}_${now.toISOString().replace(/[:.]/g,"-")}.${kind==="pdf"?"pdf":"csv"}`;

    if(kind === "csv"){
      const rows = [["Date","Currency","Amount","Rate","Converted"],
        ...Array.from({length:10}).map((_,i)=>{
          const d = new Date(Date.now()-i*86400000);
          const rate = 0.9 + Math.random()*0.2;
          const amount = 100 + Math.floor(Math.random()*900);
          return [d.toISOString().slice(0,10), params?.to ?? "EUR", amount, rate.toFixed(4), (amount*rate).toFixed(2)];
        })];
      const csv = rows.map(r=>r.join(",")).join("\n");
      return { fileName, mime:"text/csv", bytes:new TextEncoder().encode(csv) };
    }

    const text = `INVOICE\nPeriod: ${params?.from ?? "2025-08-01"} - ${params?.to ?? "2025-08-10"}\nCurrency: ${params?.to ?? "EUR"}\nTotal: $${(100+Math.random()*900).toFixed(2)}`;
    return { fileName, mime:"application/pdf", bytes:new TextEncoder().encode(text) };
  }

  global.Api = { sleep, health, forexRates, generateFile };
})(window);
