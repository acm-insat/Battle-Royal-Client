import { Button, Card, AdminChallenge } from "shared/ui"
import React, {useState} from "react"

const ManageProblems = () => {


    return (
      <Card title="Admin Panel / Manage Problems">
          <Button href="problems/new" contained>New Problem</Button>
          <AdminChallenge id="1" problem="Challenge 1" isLaunched="true"/>
          <AdminChallenge id="2" problem="Challenge 2" isEnded="true" />
          <AdminChallenge id="3" problem="Challenge 3" isLaunched="false" />

      </Card>
    )
  }
  
  export default ManageProblems
  