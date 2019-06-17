class CleanData
{

    constructor(RoverData)
    {
        this.RoverData = RoverData;
        this.PrintData();
    }

    PrintData(RoverData)
    {
        RoverData.Image = "TO BIG TO Display";
        console.log(RoverData);
    }


}