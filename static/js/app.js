// from data.js
var tableData = data;


const Tablerows = d3.select("tbody");

function showRows(data){
    Tablerows.html("");
    
    // Now need to append the rows each by each
    data.forEach((dataRow) => {
        const Temp = Tablerows.append("tr");

        Object.values(dataRow).forEach((dataelement) => {
            let cell = Temp.append("td");
                cell.text(dataelement);
        }
    );
  });
}


function clickbehav() {

    const specificdate = d3.select("#datetime").property("value");
    let selectdata = tableData;
  

    if (specificdate) {
        selectdata = selectdata.filter(eachrow => eachrow.datetime === specificdate);
    }
    showRows(selectdata);
  }
  
d3.selectAll("#filter-btn").on("click", clickbehav);

showRows(tableData);
