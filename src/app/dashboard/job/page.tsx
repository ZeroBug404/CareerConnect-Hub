import CareerTable from '@/components/ui/CareerTable';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const JobPage = () => {
    const columns = [
        {
          title: "Title",
          dataIndex: "title",
        },
        {
          title: "Company",
          dataIndex: "company",
        },
        {
          title: "Location",
          dataIndex: "location",
        },
        {
          title: "Salary",
          dataIndex: "salary",
        },
        {
          title: "Job Type",
          dataIndex: "jobType",
        },
      ];
    return (
        <div>
            <Link href="/dashboard/job/create">
                <Button type="primary">Publish a job?</Button>
            </Link>
            <CareerTable 
            columns={columns}
            showSizeChanger={true}
            showPagination={true}
            />
        </div>
    );
};

export default JobPage;