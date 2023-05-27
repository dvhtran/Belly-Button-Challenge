// data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// html 
d3.json(url).then(function(data){
    console.log(data);
});

// init function 
function init() {
        let dropdownMenu = d3.select("#selDataset");
        d3.json(url).then((data)=>{
            let names = data.names;
            names.forEach((id)=>{
                console.log(id);
                dropdownMenu.append("option")
                .text(id)
                .property("value",id)
            });
            
            let patient_id = names[0];
        
            console.log(patient_id);
        
             metadata_info(patient_id);
             bar_chart(patient_id);
             bubble_chart(patient_id);
        }); 
    };

// metadata
function metadata_info(sample_id) {
    d3.json(url).then((data)=> {
        let metadata = data.metadata;
        let filteredData = metadata.filter((meta) => meta.id == sample_id);
        console.log(filteredData)
        let valueData = filteredData[0];
        d3.select("#sample-metadata").html("");
        Object.entries(valueData).forEach(([key,value]) => {
            console.log(key,value);
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });
};


// barchart
function bar_chart(sample_id) {
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        let samples = data.samples;
        let filteredData = samples.filter((sample) => sample.id == sample_id);
        let valueData = filteredData[0];

        let otu_ids = valueData.otu_ids;
        console.log(otu_ids)
        let otu_labels = valueData.otu_labels;
        console.log(otu_labels)
        let sample_values = valueData.sample_values;
        console.log(sample_values)

        let trace = [{
            x: sample_values.slice(0,10).reverse(),
            y: otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
            text: otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h"
        }];

         Plotly.newPlot("bar",trace);

    });
};


// bubble
function bubble_chart(sample__id){
    d3.json(url).then((data)=>{
        let samples = data.samples;
        let filteredData = samples.filter((sample) => sample.id == sample__id);
        let valueData = filteredData[0];

        let otu_ids = valueData.otu_ids;
        console.log(otu_ids)
        let otu_labels = valueData.otu_labels;
        console.log(otu_labels)
        let sample__values = valueData.sample_values;
        console.log(sample__values)

        let trace1 = [{
            x: otu_ids,
            y: sample__values,
            text: otu_labels,
            mode: "markers",
            marker:{
                size: sample__values,
                color: otu_ids,
                colorscale: "Earth"
            }
        }];

        let layout = {
            xaxis:{title:"OTU ID"},
        };

        Plotly.newPlot("bubble",trace1,layout);
    });
};

// selection
function optionChanged(value){
    console.log(value);
    metadata_info(value);
    bar_chart(value);
    bubble_chart(value);
};

//display 
init();