<?php 
	session_start();
	//destroying session and redirecting 
	session_destroy();
	header("Location: index.php?msg=Logged%20out%20Successfully!");