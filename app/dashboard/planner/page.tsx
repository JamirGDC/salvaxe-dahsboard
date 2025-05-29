
import PlannerPersonal from "../../ui/dashboard/planner/planner-personal";
import {Flex} from "@chakra-ui/react";
import PlannerTeam from "../../ui/dashboard/planner/planner-team";

export default async function Page() {

    return (
        <>
            <Flex gap='30px' direction='column'>
                <PlannerPersonal />
                <PlannerTeam />
            </Flex>
        </>
    )
}
