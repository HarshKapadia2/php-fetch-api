<?php
	$data = array("name" => "Selena", "age" => 28);

	$content_type = isset($_SERVER["CONTENT_TYPE"]) ? $_SERVER["CONTENT_TYPE"] : "";

	if($content_type === "application/json")
	{
		$content = json_decode(file_get_contents("php://input"));
		$data["age"] = $content->age;
		echo json_encode($data);
	}
	else
		echo "nah";
?>
