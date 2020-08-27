import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { FirebaseService } from '../firebase.service';
import { DetailTest } from '../detail-test';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
declare var require: any;
@Component({
  selector: 'app-view-graph',
  templateUrl: './view-graph.component.html',
  styleUrls: ['./view-graph.component.css']
})
export class ViewGraphComponent implements OnInit {
  items: Array<any>;
  nbTestOpera: number;
  tempsOpera: number;
  nbTestChrome: number;
  tempsChrome: number;
  nbTestFire: number;
  tempsFirefox: number;
  nbTestEdge: number;
  tempsEdge: number;
  detailsTests:any;

  /*detailsTests:DetailTest[]=[];
  infoTestsSubscription: Subscription;*/
 public options: any ={
  chart: {
    type: 'column'
},
  title: {
      text: 'Number of Passed tests for each Browser '
  },

  subtitle: {
      text: 'Source: visualtestigADP.com'
  },

  yAxis: {
    title: {
        text: 'number of passed tests'
    }

},

  accessibility: {
    announceNewData: {
        enabled: true
    }
},
xAxis: {
    type: 'category'
},

legend: {
    enabled: false
},
plotOptions: {
    series: {
        borderWidth: 0,
        dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
        }
    }
},

tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
},

series: [
    {
        name: "Browsers",
        colorByPoint: true,
        data: [
            {
                name: "Chrome",
                y: 10,//this.nbTestChrome,
                drilldown: "Chrome"
            },
            {
                name: "Firefox",
                y: 15,//this.nbTestFire,
                drilldown: "Firefox"
            },
            
            
            {
                name: "Edge",
                y: 13,//this.nbTestEdge,
                drilldown: "Edge"
            },
            {
                name: "Opera",
                y: 6,//this.nbTestOpera,
                drilldown: "Opera"
            },
            {
                name: "IE",
                y: null,
                drilldown: null
            }
        ]
    }
],
drilldown: {
    series: [
        {
            name: "Chrome",
            id: "Chrome",
            data: [
                [
                    "v65.0",
                    0.1
                ],
                [
                    "v64.0",
                    1.3
                ],
                [
                    "v63.0",
                    53.02
                ],
                [
                    "v62.0",
                    1.4
                ],
                [
                    "v61.0",
                    0.88
                ],
                [
                    "v60.0",
                    0.56
                ],
                [
                    "v59.0",
                    0.45
                ],
                [
                    "v58.0",
                    0.49
                ],
                [
                    "v57.0",
                    0.32
                ],
                [
                    "v56.0",
                    0.29
                ],
                [
                    "v55.0",
                    0.79
                ],
                [
                    "v54.0",
                    0.18
                ],
                [
                    "v51.0",
                    0.13
                ],
                [
                    "v49.0",
                    2.16
                ],
                [
                    "v48.0",
                    0.13
                ],
                [
                    "v47.0",
                    0.11
                ],
                [
                    "v43.0",
                    0.17
                ],
                [
                    "v29.0",
                    0.26
                ]
            ]
        },
        {
            name: "Firefox",
            id: "Firefox",
            data: [
                [
                    "v58.0",
                    1.02
                ],
                [
                    "v57.0",
                    7.36
                ],
                [
                    "v56.0",
                    0.35
                ],
                [
                    "v55.0",
                    0.11
                ],
                [
                    "v54.0",
                    0.1
                ],
                [
                    "v52.0",
                    0.95
                ],
                [
                    "v51.0",
                    0.15
                ],
                [
                    "v50.0",
                    0.1
                ],
                [
                    "v48.0",
                    0.31
                ],
                [
                    "v47.0",
                    0.12
                ]
            ]
        },
       
       
        {
            name: "Edge",
            id: "Edge",
            data: [
                [
                    "v16",
                    2.6
                ],
                [
                    "v15",
                    0.92
                ],
                [
                    "v14",
                    0.4
                ],
                [
                    "v13",
                    0.1
                ]
            ]
        },
        {
            name: "Opera",
            id: "Opera",
            data: [
                [
                    "v50.0",
                    0.96
                ],
                [
                    "v49.0",
                    0.82
                ],
                [
                    "v12.1",
                    0.14
                ]
            ]
        }
    ]
}


} 
public options1: any ={
  chart: {
    type: 'column'
},
  title: {
      text: 'Execution time of Each browser '
  },

  subtitle: {
      text: 'Source: visualtestigADP.com'
  },

  yAxis: {
    title: {
        text: 'Total Time Execution'
    }

},

  accessibility: {
    announceNewData: {
        enabled: true
    }
},
xAxis: {
    type: 'category'
},

legend: {
    enabled: false
},
plotOptions: {
    series: {
        borderWidth: 0,
        dataLabels: {
            enabled: true,
            format: '{point.y:.1f}s'
        }
    }
},

tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
},

series: [
    {
        name: "Browsers",
        colorByPoint: true,
        data: [
            {
                name: "Chrome",
                y: 952321/60,//this.nbTestChrome,
                drilldown: "Chrome"
            },
            {
                name: "Firefox",
                y: 852356/60,//this.nbTestFire,
                drilldown: "Firefox"
            },
            
            
            {
                name: "Edge",
                y: 931628/60,//this.nbTestEdge,
                drilldown: "Edge"
            },
            {
                name: "Opera",
                y:972635/60,//this.nbTestOpera,
                drilldown: "Opera"
            },
            {
                name: "IE",
                y: null,
                drilldown: null
            }
        ]
    }
],
drilldown: {
    series: [
        {
            name: "Chrome",
            id: "Chrome",
            data: [
                [
                    "v65.0",
                    0.1
                ],
                [
                    "v64.0",
                    1.3
                ],
                [
                    "v63.0",
                    53.02
                ],
                [
                    "v62.0",
                    1.4
                ],
                [
                    "v61.0",
                    0.88
                ],
                [
                    "v60.0",
                    0.56
                ],
                [
                    "v59.0",
                    0.45
                ],
                [
                    "v58.0",
                    0.49
                ],
                [
                    "v57.0",
                    0.32
                ],
                [
                    "v56.0",
                    0.29
                ],
                [
                    "v55.0",
                    0.79
                ],
                [
                    "v54.0",
                    0.18
                ],
                [
                    "v51.0",
                    0.13
                ],
                [
                    "v49.0",
                    2.16
                ],
                [
                    "v48.0",
                    0.13
                ],
                [
                    "v47.0",
                    0.11
                ],
                [
                    "v43.0",
                    0.17
                ],
                [
                    "v29.0",
                    0.26
                ]
            ]
        },
        {
            name: "Firefox",
            id: "Firefox",
            data: [
                [
                    "v58.0",
                    1.02
                ],
                [
                    "v57.0",
                    7.36
                ],
                [
                    "v56.0",
                    0.35
                ],
                [
                    "v55.0",
                    0.11
                ],
                [
                    "v54.0",
                    0.1
                ],
                [
                    "v52.0",
                    0.95
                ],
                [
                    "v51.0",
                    0.15
                ],
                [
                    "v50.0",
                    0.1
                ],
                [
                    "v48.0",
                    0.31
                ],
                [
                    "v47.0",
                    0.12
                ]
            ]
        },
       
       
        {
            name: "Edge",
            id: "Edge",
            data: [
                [
                    "v16",
                    2.6
                ],
                [
                    "v15",
                    0.92
                ],
                [
                    "v14",
                    0.4
                ],
                [
                    "v13",
                    0.1
                ]
            ]
        },
        {
            name: "Opera",
            id: "Opera",
            data: [
                [
                    "v50.0",
                    0.96
                ],
                [
                    "v49.0",
                    0.82
                ],
                [
                    "v12.1",
                    0.14
                ]
            ]
        }
    ]
}


} 
public options2: any ={
  chart: {
    type: 'column'
},
  title: {
      text: 'Performance of browsers '
  },

  subtitle: {
      text: 'Source: visualtestigADP.com'
  },

  yAxis: {
    title: {
        text: 'Taux performance'
    }

},

  accessibility: {
    announceNewData: {
        enabled: true
    }
},
xAxis: {
    type: 'category'
},

legend: {
    enabled: false
},
plotOptions: {
    series: {
        borderWidth: 0,
        dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
        }
    }
},

tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
},

series: [
    {
        name: "Browsers",
        colorByPoint: true,
        data: [
            {
                name: "Chrome",
                y: 60,//this.nbTestChrome,
                drilldown: "Chrome"
            },
            {
                name: "Firefox",
                y: 75,//this.nbTestFire,
                drilldown: "Firefox"
            },
            
            
            {
                name: "Edge",
                y: 56,//this.nbTestEdge,
                drilldown: "Edge"
            },
            {
                name: "Opera",
                y:41,//this.nbTestOpera,
                drilldown: "Opera"
            },
            {
                name: "IE",
                y: null,
                drilldown: null
            }
        ]
    }
],
drilldown: {
    series: [
        {
            name: "Chrome",
            id: "Chrome",
            data: [
                [
                    "v65.0",
                    0.1
                ],
                [
                    "v64.0",
                    1.3
                ],
                [
                    "v63.0",
                    53.02
                ],
                [
                    "v62.0",
                    1.4
                ],
                [
                    "v61.0",
                    0.88
                ],
                [
                    "v60.0",
                    0.56
                ],
                [
                    "v59.0",
                    0.45
                ],
                [
                    "v58.0",
                    0.49
                ],
                [
                    "v57.0",
                    0.32
                ],
                [
                    "v56.0",
                    0.29
                ],
                [
                    "v55.0",
                    0.79
                ],
                [
                    "v54.0",
                    0.18
                ],
                [
                    "v51.0",
                    0.13
                ],
                [
                    "v49.0",
                    2.16
                ],
                [
                    "v48.0",
                    0.13
                ],
                [
                    "v47.0",
                    0.11
                ],
                [
                    "v43.0",
                    0.17
                ],
                [
                    "v29.0",
                    0.26
                ]
            ]
        },
        {
            name: "Firefox",
            id: "Firefox",
            data: [
                [
                    "v58.0",
                    1.02
                ],
                [
                    "v57.0",
                    7.36
                ],
                [
                    "v56.0",
                    0.35
                ],
                [
                    "v55.0",
                    0.11
                ],
                [
                    "v54.0",
                    0.1
                ],
                [
                    "v52.0",
                    0.95
                ],
                [
                    "v51.0",
                    0.15
                ],
                [
                    "v50.0",
                    0.1
                ],
                [
                    "v48.0",
                    0.31
                ],
                [
                    "v47.0",
                    0.12
                ]
            ]
        },
       
       
        {
            name: "Edge",
            id: "Edge",
            data: [
                [
                    "v16",
                    2.6
                ],
                [
                    "v15",
                    0.92
                ],
                [
                    "v14",
                    0.4
                ],
                [
                    "v13",
                    0.1
                ]
            ]
        },
        {
            name: "Opera",
            id: "Opera",
            data: [
                [
                    "v50.0",
                    0.96
                ],
                [
                    "v49.0",
                    0.82
                ],
                [
                    "v12.1",
                    0.14
                ]
            ]
        }
    ]
}
}
getInfoTestList() {
    this.fb.getInfoTestList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(res => {
      this.detailsTests = res;
      console.log(res);
    });
  }
  constructor(private fb:FirebaseService) { 
 
  }
  ngOnInit() {
      this.getInfoTestList();
  /*  for (let item of this.items){
      if(item.payload.doc.data().browser== "Opera")
      {
        this.tempsOpera=this.tempsOpera+item.payload.doc.data().tempsExecution;
        this.nbTestOpera++;
      }
      else if(item.payload.doc.data().browser == "Edge")
      {
        this.tempsEdge=this.tempsEdge+item.payload.doc.data().tempsExecution;
        this.nbTestEdge++;
      }
      else if(item.payload.doc.data().browser == "Chrome")
      {
        this.tempsChrome=this.tempsChrome+item.payload.doc.data().tempsExecution;
        this.nbTestChrome++;
      }
      else if(item.payload.doc.data().browser == "Edge")
      {
        this.tempsFirefox=this.tempsFirefox+item.payload.doc.data().tempsExecution;
        this.nbTestFire++;
      }
    }*/


  

    Highcharts.chart('container', this.options);
    Highcharts.chart('container1', this.options1);
    Highcharts.chart('container2', this.options2);
  }
}
