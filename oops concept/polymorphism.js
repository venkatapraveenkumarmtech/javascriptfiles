class shape
{
    draw()
    {
        console.log("drawing a shape");
    }
}
class circle extends shape
{
    draw()
    {
        console.log("drawing a circle");

    }
}
class square extends shape{
    draw()
    {
        console.log("drawing a square");
    }
}
const s1=new circle();
console.log(s1);

