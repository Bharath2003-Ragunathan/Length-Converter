function Trans()
{


    let first = document.getElementById("first").value;

    let input1 = document.getElementById("input1").value;

    let input2 = document.getElementById("input2").value;

    //convert the length based on the selected units

    let result
    if(input1 === "Centimeter" && input2 === "Inch")
    {
       result = first / 2.54;
    }

    else if (input1 === "Inch" && input2 === "Centimeter")
    {
        result = first * 2.54;
    }
    
    else if (input1 === "Kilometre" && input2 === "Metre")
    {
        result = first *1000;
    }

    else if ( input1 === "Metre" && input2 === "Kilometre")
    {
        result = first /1000;
    }

    else if ( input1 === "Metre" && input2 === "Centimeter")
    {
        result = first*100;
    }

    else if ( input1 === "Centimeter" && input2 === "Metre")
    {
        result = first *0.01;
    }

    else if ( input1 === "Foot" && input2 === "Metre")
    {
        result = first * 0.3048;
    }

    else if ( input1 === "Metre" && input2 === "Foot")
    {
        result = first * 3.28084;
    }

    else if ( input1 === "Metre" && input2 === "Inch")
    {
        result = first *39.3701;
    }

    else if ( input1 === "Inch" && input2 === "Metre")
    {
        result = first /39.3701;
    }

    else if ( input1 === "Metre" && input2 === "Mile")
    {
        result = first / 1609;
    }
    
    else if ( input1 === "Mile" && input2 === "Metre")
    {
        result = first*1609;
    }

    else if ( input1 === "Metre" && input2 === "Yard")
    {
        result = first*1.094;
    }

    else if ( input1 === "Yard" && input2 === "Metre")
    {
        result = first /1.094;
    }

    else if ( input1 === "Metre" && input2 === "Millimetre")
    {
        result= first * 1000;
    }

    else if ( input1 === "Millimetre" && input2 === "Metre")
    {
        result = first /1000;
    }

    //2
    
    else if (input1 === "Inch" && input2 === "Millimetre")
    {
        result = first * 25.4;
    }
    
    else if (input1 === "Millimetre" && input2 === "Inch")
    {
        result = first / 25.4;
    }

    else if (input1 === "Inch" && input2 === "Kilometre")
    {
        result = first / 39370;
    }

    else if (input1 === "Kilometre" && input2 === "Inch")
    {
        result = first * 39370;
    } 

    else if (input1 === "Inch" && input2 === "Metre")
    {
        result = first / 39.37;
    } 

    else if (input1 === "Metre" && input2 === "Inch")
    {
        result = first * 39.37;
    }

    else if (input1 === "Inch" && input2 === "Foot")
    {
        result = first / 12;
    }

    else if (input1 === "Foot" && input2 === "Inch")
    {
        result = first * 12;
    }

    else if (input1 === "Inch" && input2 === "Mile")
    {
        result = first / 63360;
    }

    else if (input1 === "Mile" && input2 === "Inch")
    {
        result = first * 63360;
    }

    else if (input1 === "Inch" && input2 === "Yard")
    {
        result = first / 36;
    }

    else if (input1 === "Yard" && input2 === "Inch")
    {
        result = first * 36;
    }

    else if (input1 === "Millimetre" && input2 === "Inch")
    {
        result = first / 25.4;
    }

    else if (input1 === "Inch" && input2 === "Millimetre")
    {
        result = first * 25.4;
    }

    else if (input1 === "Millimetre" && input2 === "Kilometre")
    {
        result = first / 1e+6;
    }

    else if (input1 === "Kilometre" && input2 === "Millimetre")
    {
        result = first * 1e+6;
    }

    else if (input1 === "Millimetre" && input2 === "Centimeter")
    {
        result = first / 10;
    }

    else if (input1 === "Centimeter" && input2 === "Millimetre")
    {
        result = first * 10;
    }

    else if (input1 === "Millimetre" && input2 === "Metre")
    {
        result = first / 1000;
    }

    else if (input1 === "Meter" && input2 === "Millimetre")
    {
        result = first * 1000;
    }

    else if (input1 === "Millimetre" && input2 === "Foot")
    {
        result = first / 304.8;
    }

    else if (input1 === "Foot" && input2 === "Millimetre")
    {
        result = first * 304.8;
    }

    else if (input1 === "Millimetre" && input2 === "Mile")
    {
        result = first / 1.609e+6;
    }

    else if (input1 === "Mile" && input2 === "Millimetre")
    {
        result = first * 1.609e+6;
    }

    else if (input1 === "Millimetre" && input2 === "Yard")
    {
        result = first / 914.4;
    }

    else if (input1 === "Yard" && input2 === "Millimetre")
    {
        result = first * 914.4;
    }

    //3

    else if (input1 === "Kilometre" && input2 === "Yard")
    {
        result = first * 1094;
    }

    else if (input1 === "Yard" && input2 === "Kilometre")
    {
        result = first / 1094;
    }

    else if (input1 === "Kilometre" && input2 === "Millimetre")
    {
        result = first * 1e+6;
    }

    else if (input1 === "Millimetre" && input2 === "Kilometre")
    {
        result = first / 1e+6;
    }

    else if (input1 === "Kilometre" && input2 === "Centimeter")
    {
        result = first * 100000;
    }

    else if (input1 === "Centimeter" && input2 === "Kilometre")
    {
        result = first / 100000;
    }

    else if (input1 === "Kilometre" && input2 === "Metre")
    {
        result = first * 1000;
    }

    else if (input1 === "Meter" && input2 === "Kilometre")
    {
        result = first / 1000;
    }

    else if (input1 === "Kilometre" && input2 === "Foot")
    {
        result = first * 3281;
    }
    
    else if (input1 === "Foot" && input2 === "Kilometre")
    {
        result = first / 3281;
    }

    else if (input1 === "Kilometre" && input2 === "Inch")
    {
        result = first * 39370;
    }

    else if (input1 === "Inch" && input2 === "Kilometre")
    {
        result = first / 39370;
    }

    else if (input1 === "Kilometre" && input2 === "Mile")
    {
        result = first / 1.609;
    }


    else if (input1 === "Mile" && input2 === "Kilometre")
    {
        result = first * 1.609;
    }
  
    //4
    
    else if (input1 === "Centimeter" && input2 === "Foot")
    {
        result = first / 30.48;
    }
   
    else if (input1 === "Foot" && input2 === "Centimeter")
    {
        result = first * 30.48;
    }

    else if (input1 === "Centimeter" && input2 === "Mile")
    {
        result = first / 160900;
    }

    else if (input1 === "Mile" && input2 === "Centimeter")
    {
        result = first * 160900;
    }

    else if (input1 === "Centimeter" && input2 === "Yard")
    {
        result = first / 91.44;
    }

    else if (input1 === "Yard" && input2 === "Centimeter")
    {
        result = first * 91.44;
    }

    //5

    else if (input1 === "Foot" && input2 === "Yard")
    {
        result = first / 3;
    }


    else if (input1 === "Yard" && input2 === "Foot")
    {
        result = first * 3;
    }

    else if (input1 === "Foot" && input2 === "Mile")
    {
        result = first / 5280;
    }

    else if (input1 === "Mile" && input2 === "Foot")
    {
        result = first * 5280;
    }

    //6

    else if (input1 === "Mile" && input2 === "Yard")
    {
        result = first * 1760;
    }

    else if (input1 === "Yard" && input2 === "Mile")
    {
        result = first / 1760;
    }




    document.getElementById("result").innerHTML = result.toFixed(3);
}