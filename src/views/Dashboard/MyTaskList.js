import React from "react";
// Chakra imports
import {Flex, Table, Tbody, Text, Th, Thead, Tr, useColorModeValue,} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import {tablesProjectData} from "variables/general";

function MyTaskList() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
      <Flex direction="column" pt={{base: "120px", md: "75px"}}>
        <Card my="22px" overflowX={{sm: "scroll", xl: "hidden"}}>
          <CardHeader p="6px 0px 22px 0px">
            <Flex direction="column">
              <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
                申请待办任务
              </Text>
            </Flex>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px">
                  <Th pl="0px" color="gray.400">
                    公司
                  </Th>
                  <Th color="gray.400">额度</Th>
                  <Th color="gray.400">状态</Th>
                  <Th color="gray.400">进度</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {tablesProjectData.map((row) => {
                  return (
                      <TablesProjectRow
                          name={row.name}
                          logo={row.logo}
                          status={row.status}
                          budget={row.budget}
                          progression={row.progression}
                      />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </Flex>
  );
}

export default MyTaskList;
