class rectangle
{
    constructor(lenth,bredth)
    {
        this.lenth=lenth;
        this.bredth=bredth;
    }
    get lenth()
    {
        this.lenth;
    }
    set lenth(value)
    {
        if (value>0)
        {
            this.lenth=value;
        }
        else{
            console.log("the value should be positive value");
        }
    }
    getarea()
    {
        return this.bredth*this.lenth;
    }
    getPerimeter()
    {
        return  2*(this.bredth+this.lenth);
    }
}
let rect1=new rectangle(14,16);
console.log("area:",rect1.getarea());
console.log("perimeter:-",rect1.getPerimeter());
