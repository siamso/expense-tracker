import React, { useContext, useEffect } from "react";
import ExpenseView from "./ExpenseView";
import Summary from "./Summary";
import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { GlobalContext } from "../context/GlobalContext";
function Main() {
  const {
    totalExpense,
    allTransaction,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
  } = useContext(GlobalContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransaction.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalIncome(income);
    setTotalExpense(expense);
  }, [allTransaction]);
  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.300"} color={"black"} ml={"4"}>
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex
        w="full"
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView />
        <ExpenseView />
      </Flex>
    </Flex>
  );
}

export default Main;
