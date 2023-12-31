"use client";
import { useGetPortfoliosQuery } from "@/redux/api/portfolioApi";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import GlobalModal from "../Shared/GlobalModal";
import PortfolioModal from "../ui/ResumeModal/PortfolioModal";
import UpdatePortfolio from "./UpdatePortfolio";

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  const { data } = useGetPortfoliosQuery({});

  return (
    <Flex
      wrap="wrap"
      gap="small"
      justify="space-between"
      style={{
        borderBottom: "1px solid black",
        padding: "10px 0",
      }}
    >
      <div>
        <p>PORTFOLIO/ WORK SAMPLES</p>
      </div>
      <div style={{ width: "50%" }}>
        <div>
          <Flex wrap="wrap" gap="middle" justify="space-between" align="start">
            {data?.data?.map(
              (portfolio: {
                id: Key | null | undefined;
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined;
                gitHub:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined;
              }) => (
                <div key={portfolio.id}>
                  <h4>{portfolio.title}</h4>
                  <p>{portfolio.gitHub}</p>
                </div>
              )
            )}
            <Flex wrap="wrap" gap="middle" justify="end" align="start">
              <UpdatePortfolio />
              <DeleteOutlined />
            </Flex>
          </Flex>
        </div>
        <div>
          <Button type="link" onClick={() => setOpen(true)}>
            <PlusOutlined />
            Add Portfolio
          </Button>
        </div>
        <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
          <PortfolioModal
            btnName={"Save"}
            modalData={data?.data}
          ></PortfolioModal>
        </GlobalModal>
      </div>
    </Flex>
  );
};

export default Portfolio;
