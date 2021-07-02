var images=[
    "https://www.clipartkey.com/mpngs/m/109-1090456_family-cartoon-wallpaper-talk-to-my-family.png",
    "https://tse2.mm.bing.net/th?id=OIP.31geDr5_FTLvAEAvWjBqlAHaIG&pid=Api&P=0&w=300&h=300",
    "https://tse4.mm.bing.net/th?id=OIP.s2KOSSh9jX_gRcT9Ak4b_gHaI7&pid=Api&P=0&w=300&h=300",
    "https://webstockreview.net/images/brother-clipart-cartoon-6.png"];

    var names=["Family book","Rajat Pasricha","Pooja Pasricha","Ruhaani Pasricha"]

    var i=0;

    function update(){
        
        i++;
       
        var number_of_family_members_in_array=3

        if(i > number_of_family_members_in_array)
        {
            i=0;
        }
        var updatedimage = images[i];
        var updatednames = names[i];

        document.getElementById("family_member_image").src= updatedimage;
        document.getElementById("family_member_names").innerHTML= updatednames;

    }
 