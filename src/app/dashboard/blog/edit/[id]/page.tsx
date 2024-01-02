"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import CareerBreadCrumb from "@/components/ui/CareerBreadCrumb";
import { useBlogQuery, useUpdateBlogMutation } from "@/redux/api/blogApi";
import { Button, Col, Row, message } from "antd";

const EditBlogPage = ({ params }: any) => {
  const { id } = params;
  const { data, isLoading } = useBlogQuery(id);
  const [updateBlog] = useUpdateBlogMutation();

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      console.log(data);
      const res = await updateBlog({ body: data }).unwrap();

      if (res) {
        message.success("Jobs updated successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.data?.title || "",
    author: data?.data?.author || "",
    publishDate: data?.data?.publishDate || "",
    content: data?.data?.content || "",
    // views: data?.data?.views || "",
    // likes: data?.data?.likes || "",
    // commentText: data?.data?.commentText || "",
    // commentDate: data?.data?.commentDate || "",
  };

  return (
    <>
      <CareerBreadCrumb
        items={[
          {
            label: "Publish Blog",
            link: "/dashboard/blog/create",
          },
          {
            label: "View Blogs",
            link: "/dashboard/blog",
          },
        ]}
      />
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          width: "100%",
        }}
      >
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <h2>Update a blog</h2>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Blog Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="title"
                  type="text"
                  size="small"
                  label="Title"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="author"
                  type="text"
                  size="small"
                  label="Author"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="publishDate"
                  type="date"
                  size="small"
                  label="Publish Date"
                />
              </Col>
              {/* <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="views"
                  type="number"
                  size="small"
                  label="Views"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="likes"
                  type="number"
                  size="small"
                  label="Likes"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="commentText"
                  type="text"
                  size="small"
                  label="Comment Text"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="commentDate"
                  type="date"
                  size="small"
                  label="Comment Date"
                />
              </Col> */}
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormTextArea
                  name="content"
                  label="Content"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
          <div style={{ margin: "10px 0" }}>
            <Button type="primary" htmlType="submit" size="large">
              Update Blog
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default EditBlogPage;