import React from "react";

const PlantCreation = () => {

    return (
        <>
            <p>Fill in the below form to add a new plant to your garden</p>
            <form action="/api/plants" method="post">

                <input text="text" placeholder = "Name" name="plantNameOne" id="plantNameOne" size="50"></input>
                <br />

                <input text="text" placeholder = "Second name" name="plantNameTwo" id="plantNameTwo" size="50"></input>
                <br />

                <input text="text" placeholder = "Origin" name="origin" id="origin" size="50"></input>
                <br />

                <input text="text" placeholder = "Acquisition date" name="acquisitionDate" id="acquisitionDate" size="50"></input>
                <br />        
        
                <input text="text" placeholder="Status e.g. healthy" name="status" id="status" size="50"></input>
                <br />
                
                <input text="text" placeholder="Growing season" name="growingSeason" id="growingSeason" size="50"></input>
                <br />

                <input text="text" placeholder="Light needs e.g. direct sunlight, partial shade, etc." name="light" id="light" size="50"></input>
                <br />

                <input text="text" placeholder="Water e.g. signs of ideal soil humidity" name="water" id="water" size="50"></input>
                <br />

                <input text="text" placeholder="Ideal temperature range" name="temperature" id="temperature" size="50"></input>
                <br />
                
                <input text="text" placeholder="Nutrient needs e.g. NPK, general schedule, etc." name="nutrients" id="nutrients" size="50"></input>
                <br />

                <input text="text" placeholder="Ideal potting mix, including soil additives such as perlites" name="soil" id="soil" size="50"></input>
                <br />
            
                <input text="text" placeholder="Ideal air humidity levels" name="humidity" id="humidity" size="50"></input>
                <br />

                <input text="text" placeholder="Pruning" name="pruning" id="pruning" size="50"></input>
                <br />

                <input text="text" placeholder="Repotting frequency" name="repotting" id="repotting" size="50"></input>
                <br />

                <textarea placeholder="Additional notes" name="notes" id="notes" rows="10" cols="45"></textarea>
                <br />

                <input type="submit" value="Submit" />

            </form>
        </>
    );
}

export default PlantCreation;