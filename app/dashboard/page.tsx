import CardResume from "../ui/dashboard/card-resume";
import {Flex} from "@chakra-ui/react";
import CardPlanner from "../ui/dashboard/card-planner";
import CardMessage from "../ui/dashboard/card-message";
import CardPlannerResume from "../ui/dashboard/card-planner-resume";
import ChartResume from "../ui/dashboard/chart-resume";
import ProjectResume from "../ui/dashboard/project-resume";
import CardExpenses from "../ui/dashboard/card-expenses";

export default async function Page() {

    return (
        <>
            <Flex direction='column'  w='100%' h='100%' gap='25px'>
                <Flex direction='row' gap='25px'>
                    <CardResume />
                    <CardResume />
                    <CardResume />
                    <CardResume />

                </Flex>

                <Flex direction='row' gap='25px'>
                    <CardPlanner />
                    <CardMessage />
                </Flex>
                <Flex direction='row' gap='25px'>
                    <CardPlannerResume />
                    <ChartResume />
                </Flex>
                <Flex direction='row' gap='25px'>
                    <ProjectResume />
                    <CardExpenses />
                </Flex>


            </Flex>


        </>
  )
}
