#!/usr/bin/env -S node --no-warnings --env-file=.env

const systemInstruction = require("fs").readFileSync(__dirname + "/.confg/system_instruction", "utf8") 
const systemInstructionInit = require("fs").readFileSync(__dirname + "/.confg/system_instruction_init_ai", "utf8") 

const OpenAI = require("openai");
const inquirer = require('inquirer')
const { createClient } = require('@supabase/supabase-js');
const { Client } = require("pg")

const supabase = createClient(
  process.env.SUPABASE_URL, 
  process.env.SUPABASE_ANON_KEY
);

const prompt = inquirer.default.prompt

const openai = new OpenAI({ apiKey: "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" });

const PgInfo = {
  user: process.env.POSTGRESS_URL.split("postgresql://")[1].split(":")[0],
  host: process.env.POSTGRESS_URL.split("@")[1].split(":")[0],
  database: process.env.POSTGRESS_URL.split("postgresql://")[1].split(".")[0],
  password: process.env.POSTGRESS_URL.split(":")[2].split("@")[0],
  port: Number(process.env.POSTGRESS_URL.split(":")[3].split("/postgres")[0])
}

async function supabaseQuery(mySql) {
  const client = new Client(PgInfo)
  await client.connect()
  const res = await client.query(mySql)
  await client.end()
  return res
}
/*
async function initialDataCollection(question){
  const completion = await openai.chat.completions.create({
    messages: [
      { 
        role: "system", 
        content: systemInstructionInit
      }, {
        role: "user",
        content: question
      }],
    model: "gpt-4o-mini",
  })
  return eval("("+completion.choices[0].message.content+")");
}*/

async function question(question, nuances) {
  const completion = await openai.chat.completions.create({
    messages: [
      { 
        role: "system", 
        content: systemInstruction
      }, {
        role: "user",
        content: question
      }],
    model: "gpt-4o-mini",
  })
  return eval("("+completion.choices[0].message.content+")");
}

// Пронумируй строки в таблице Test

let savedCode = null;

(async () => {
  while(true){
    const { request } = await (
      async function(){        
        const req = await prompt([
          {
            type: 'input',
            name: 'request',
            message: "Запрос",
          },
        ]).catch(()=>{})
        return {request: req?.request??""}
      }
    )()
/*    const resInitAi = await initialDataCollection(request)
    console.log(resInitAi)
    eval(resInitAi.code)
    const codeResult = await scrup()
    console.log(JSON.stringify(codeResult) + "\n")*/
    /*, { result: JSON.stringify(codeResult), text: resInitAi.text }*/
    const response = await question(request)

    console.log(response.text)

    savedCode = response.code
    
    while(true){      
      const { confirm } = await (
        async function(){        
          const req = await prompt([
            {
              type: 'input',
              name: 'confirm',
              message: "[Подтвердить]/Отменить/Код",
            },
          ]).catch(()=>{})
          return {confirm: req?.confirm??""}
        }
      )()
      console.log(confirm)
      switch(confirm){
        case "Отменить":
          savedCode = null
        break;
        case "Код":
          console.log(savedCode)
        break;
      }
      if(confirm != "Код"){
        if(confirm != "Отменить"){
          eval("async function func(){" + savedCode + "}")
          await func()
        }
        break
      }
    } 
  }
})()