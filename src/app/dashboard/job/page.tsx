import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const JobPage = () => {
    return (
        <div>
            <h3>This job page</h3>
            <Link href="/dashboard/job/create">
                <Button type="primary">Create JOb</Button>
            </Link>
        </div>
    );
};

export default JobPage;