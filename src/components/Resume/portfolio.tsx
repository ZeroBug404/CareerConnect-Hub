"use client";

import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, message } from "antd";
import { useState } from "react";
import GlobalModal from "../Shared/GlobalModal";
import PortfolioModal from "../ui/ResumeModal/PortfolioModal";
import {
  useDeletePortfolioMutation,
  usePortfoliosQuery,
} from "@/redux/api/portfolioApi";
import UpdatePortfolioModal from "../ui/ResumeModal/UpdatePortfolioModal";
import Link from "next/link";
import { getUserInfo } from "@/services/auth.service";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const query: Record<string, any> = {};
  const { data, isLoading } = usePortfoliosQuery({ ...query });
  const portfolioData = data?.data;
  const [deletePortfolio] = useDeletePortfolioMutation();

  const { email } = getUserInfo() as any;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deletePortfolio(id);
      if (res) {
        message.success("Education deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const handleEditClick = (id: string) => {
    setSelectedId(id);
    setEditModalOpen(true);
  };

  const filteredByEmail = portfolioData?.filter(
    (item: any) => item.userEmail === email
  );

  return (
    <>
      <Row
        style={{
          padding: "10px 0",
        }}
      >
        <Col xs={24} sm={8}>
          <p>PORTFOLIO</p>
        </Col>
        <Col xs={24} sm={16}>
          <Col>
            {filteredByEmail?.map((portfolio: any) => (
              <Flex
                wrap="wrap"
                gap="middle"
                justify="space-between"
                align="start"
                key={portfolio._id}
              >
                <div style={{ padding: "5px 0" }}>
                  <h4 style={{ padding: "5px 0" }}>GitHub portfolio</h4>
                  <Link href="">{portfolio?.gitHub}</Link>
                  <h4 style={{ padding: "5px 0" }}>Other portfolio link</h4>
                  <Link href="">{portfolio?.other}</Link>
                </div>
                <Flex wrap="wrap" gap="middle" justify="end" align="center">
                  <Button onClick={() => handleEditClick(portfolio._id)}>
                    <EditOutlined />
                  </Button>
                  <Button onClick={() => deleteHandler(portfolio?._id)}>
                    <DeleteOutlined />
                  </Button>
                </Flex>
              </Flex>
            ))}
          </Col>
          <div>
            <Button type="link" onClick={() => setOpen(true)}>
              <PlusOutlined />
              Add Portfolio
            </Button>
          </div>
          <GlobalModal open={open} setOpen={setOpen} width={650} title={""}>
            <PortfolioModal />
          </GlobalModal>
          <GlobalModal
            open={editModalOpen}
            setOpen={() => {
              setEditModalOpen(false);
              setSelectedId(null);
            }}
            width={650}
            title={""}
          >
            {/* Pass the selected ID to the UpdateExperienceModal */}
            <UpdatePortfolioModal id={selectedId} />
          </GlobalModal>
        </Col>
      </Row>
    </>
  );
};

export default Portfolio;
