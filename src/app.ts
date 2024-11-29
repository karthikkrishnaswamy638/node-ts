import express,{Request,Response} from "express";
const app=express();


app.get("/home",(req:Request ,res:Response)=>{
    res.send("welcome");

})
app.post("/user", (req: Request, res: Response) => {
    console.log(req?.body);
    
  res.send("welcome user");
});

app.listen(9000,()=>{
    console.log("Server Started");
    
})