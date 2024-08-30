import { Component } from "react";
import { IoIosInformationCircleOutline } from 'react-icons/io'

import {LineChart,CartesianGrid,XAxis,YAxis,Legend,Tooltip,Line,ResponsiveContainer,PieChart,Pie,Cell, Label} from "recharts"

import "./index.css"


const data_object = 
    [
        {"Month": "6/30/2024 - 7/6/2024 ", "Sales": 1404, "Orders": 4, "Avg Order value": 351 },
        
       

        {"Month": "7/7/2024 - 7/13/2024", "Sales": 800, "Orders": 2, "Avg order value" : 400},
       

        {"Month": "7/21/2024", "Sales": 500, "Orders": 2, "Avg order value" : 250},
       
       

    ]

const pieChartData = [
    {
        sales:1175,
        salesThrough : "WooCommerce Store"
    }, 
    {
        sales : 1484, 
        salesThrough:"Shopify Store"
    }
]

    const valueConvert = (value) => {
        if (value>100) {
            return `${(value/1000)}k`
        }
        return value
    }



    const StyleFormats = ({totalSales}) => (
        <g>
                <text
                x= "50%"
                y="45%"
               
                textAnchor="middle" style={{fill:"grey"}} fontSize={isSmallScreen?"8px": "12px"}  >
                    Total
                </text >
                <text
                x= "50%" y = "50%" 
                textAnchor="middle"style={{"font-weight":"bold", fill:"#5F5D5E"}} fontSize={isSmallScreen?"10px": "14px"}>
                    {totalSales}
                </text>

        </g>
    )


    const customizedLabel = ({cx,cy,percent,innerRadius,outerRadius,midAngle})=> {
        console.log(percent)
       
        const RADIAN = Math.PI/180
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x= {x} 
            y = {y} 
            textAnchor="middle" 
            fill = "white"  
            style={{fontWeight:"bold"}}
            fontSize={isSmallScreen?"9px": "12px"}
            
            >
                {`${(percent * 100).toFixed(1)}%`}



        </text>

    )
}

const isSmallScreen = window.innerWidth < 768 ; 

class Dashboard extends Component {


    render(){


   

        
    const totalSales = pieChartData.reduce((accumulator,next)=> accumulator + next.sales,0)
    console.log(totalSales)
        
        
        return(
            <div className="main--dashboard-bg">          
                <div className="dashbord-background">
                    <h5 className="dash-view">Dashboard</h5>
                    
                </div>
                <div className="chart-container">
                    <div className="line-chart-graph">
                        <div className="style">
                        <h5  >Sales vs Orders </h5>
                        <IoIosInformationCircleOutline size={15} />
                        </div>
                        <hr/>
                      
                        <ResponsiveContainer width="100%"  height={isSmallScreen? 200:350} aspect={isSmallScreen?2:undefined} >


                        <LineChart data={data_object}  
                            margin={{ top: 5, right: 30, left: 20, bottom: 10 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                           
                            <XAxis dataKey="Month" fontSize={isSmallScreen? "10px": "12px"} />
                            <YAxis yAxisId = "left-side" orientation="left" tickFormatter={valueConvert}  fontSize={isSmallScreen? "10px":"12px"}/>
                            <YAxis yAxisId="right-side" orientation="right" fontSize={isSmallScreen? "10px":"12px"}/>
                            <Tooltip />
                            <Legend  layout="horizontal" verticalAlign="top"  align="center" wrapperStyle={{fontSize:"12px"}}/>
                          
                            <Line type="monotone" dataKey="Sales" stroke="#82ca9d"  yAxisId="left-side" strokeWidth={2}  />
                            <Line type="monotone" dataKey="Orders"  stroke="#F49F1F" yAxisId="right-side" strokeWidth={2} />
                        </LineChart>
                        </ResponsiveContainer>
                      


                        

                    </div>
                    <div className="piechart-background">
                        <div className="style portion">
                        <h5>Portions of Sales</h5>
                        <IoIosInformationCircleOutline size = {15} />

                        </div>
                        <hr/>
                        <ResponsiveContainer width="100%" height={300} >
                            
                            <PieChart >
                                
                                <Pie cx="50%" cy="50%"
                                data = {pieChartData}
                                startAngle={90}
                                endAngle={450}
                                dataKey="sales" 
                                labelLine={false}
                                outerRadius={isSmallScreen? 80 : 120}
                               
                                label = {customizedLabel}
                                
                                >
                                    <Cell name = "WooCommerce Store" fill="#1FF4DC" dataKey="sales"  />
                                    <Cell name = "Shopify Store" fill="#F77885" />
                                    <Label content={<StyleFormats totalSales={totalSales}/>} />
                                           
                                        
                                </Pie>
                                <Tooltip/>
                               
                                <Legend iconSize={isSmallScreen? 6 : 12} iconType="circle" layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{fontSize:isSmallScreen? "10px":"12px", display:"flex", flexDirection:"column"}}   />
                            </PieChart>

                        </ResponsiveContainer>

                    </div>
                </div>
            </div>

        )
    }
}




export default Dashboard