'use client'
import {Text, Flex } from "@chakra-ui/react";
import { Chart, useChart } from "@chakra-ui/charts"
import {Area, AreaChart, Tooltip, XAxis, YAxis} from "recharts";

export default function ChartResume() {
    const chart = useChart({
        data: [
            { windows: 186, mac: 80, linux: 120, month: "January" },
            { windows: 165, mac: 95, linux: 110, month: "February" },
            { windows: 190, mac: 87, linux: 125, month: "March" },
            { windows: 195, mac: 88, linux: 130, month: "May" },
            { windows: 182, mac: 98, linux: 122, month: "June" },
            { windows: 175, mac: 90, linux: 115, month: "August" },
            { windows: 180, mac: 86, linux: 124, month: "October" },
            { windows: 185, mac: 91, linux: 126, month: "November" },
        ],
        series: [
            { name: "windows", color: "teal.solid" },
            { name: "mac", color: "purple.solid" },
        ],
    })
    return (
        <>
            <Flex w='60%' bg='white' rounded="2xl" p='20px' direction='column'>

                <Flex justify='space-between' align='center' w='100%'>
                    <Text fontWeight='bold' fontSize='12px' color='#A0AEC0'>Trabajo y equipo</Text>
                    <Text fontWeight='bold' fontSize='10px' color='#2D3748'>Ir a agenda</Text>
                </Flex>

                <Flex justify='space-between' align='center' w='100%' h='100%' maxHeight='445px'>
                    <Flex direction='column' w='100%' h='100%' justify='space-between' gap='10px'>



                        <Flex justify='start' align='start' w='100%' h='100%' direction='column' gap='2px'>
                            <Text fontWeight='bold' fontSize='18px' color='#2D3748'>Ganancias anuales</Text>
                            <Text fontWeight='regular' fontSize='14px' color='#2D3748'>(+5) mas que 2024</Text>
                        </Flex>
                        <Chart.Root maxH="2xs" w='100%' chart={chart}>
                            <AreaChart
                                accessibilityLayer
                                data={chart.data}
                                margin={{ bottom: 24 }}
                            >
                                <XAxis
                                    dataKey={chart.key("month")}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                    stroke={chart.color("border")}
                                />
                                <YAxis stroke={chart.color("border")} />
                                <Tooltip
                                    cursor={false}
                                    animationDuration={100}
                                    content={<Chart.Tooltip />}
                                />
                                {chart.series.map((item) => (
                                    <Area
                                        type="natural"
                                        key={item.name}
                                        isAnimationActive={false}
                                        dataKey={chart.key(item.name)}
                                        fill={chart.color(item.color)}
                                        fillOpacity={0.2}
                                        stroke={chart.color(item.color)}
                                        stackId="a"
                                    />
                                ))}
                            </AreaChart>
                        </Chart.Root>




                    </Flex>
                </Flex>









            </Flex>
        </>
    );
}
