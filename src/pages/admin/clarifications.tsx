import { Button, Card, AdminClarification } from "shared/ui"
const Clarifications = () => {
    return (
      <Card title="Admin Panel / Answer Clarifications">
          <AdminClarification id="1" problem="Challenge 1" question="Why 1+1=1?"/>
          <AdminClarification id="1" problem="Challenge 2" question="Whats acm?"/>

      </Card>
    )
  }
  
  export default Clarifications
  