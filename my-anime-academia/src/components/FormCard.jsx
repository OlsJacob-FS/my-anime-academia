import { Card, CardHeader, CardBody, Divider, Avatar } from "@nextui-org/react";

{
  /* <form className="flex commentSection" onSubmit={props.commentSubmit}>
  <textarea
    placeholder="Comment Here"
    value={props.commentValue}
    onChange={props.commentChange}
    className="commentField"
  ></textarea>
  <button className="commentBtn" type="submit">
    Post
  </button>
</form>; */
}
function FormCard(props) {
  return (
    <>
      <div className="discusPost">
        <Card>
          <CardHeader className="flex gap-3 discussionTitle">
            <Avatar
              alt="Profile Picture"
              height={40}
              radius="sm"
              src="../../src/assets/images/mikey.png"
              width={40}
            />

            <div className="flex flex-col">
              <p className="text-md">{props.userName}</p>
            </div>
          </CardHeader>
          <div>
            <h3>{props.formTitle}</h3>
          </div>
          <Divider />
          <CardBody>
            <p>{props.formBody}</p>
          </CardBody>
          <Divider />
        </Card>
      </div>
    </>
  );
}

export default FormCard;
