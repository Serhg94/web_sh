<?php
include("config.php");

global $host, $port, $param, $folder, $username, $password, $time_sec_chg;
$imap = imap_open("{"."{$host}:{$port}{$param}"."}$folder",$username,$password) or die('Cannot connect to statistic: ' .imap_last_error()); 
$numMessages = imap_num_msg($imap);
for ($i = $numMessages; ($i > $numMessages-70)&&($i > 0); $i--) {
    $header = imap_header($imap, $i);
 
    $fromInfo = $header->from[0];
    $replyInfo = $header->reply_to[0];
 
    $details = array(
        "fromAddr" => (isset($fromInfo->mailbox) && isset($fromInfo->host))
            ? $fromInfo->mailbox . "@" . $fromInfo->host : "",
        "fromName" => (isset($fromInfo->personal))
            ? $fromInfo->personal : "",
        "replyAddr" => (isset($replyInfo->mailbox) && isset($replyInfo->host))
            ? $replyInfo->mailbox . "@" . $replyInfo->host : "",
        "replyName" => (isset($replyTo->personal))
            ? $replyto->personal : "",
        "subject" => (isset($header->subject))
            ? $header->subject : "",
        "udate" => (isset($header->udate))
            ? $header->udate : ""
    );

    $uid = imap_uid($imap, $i);
    $details["udate"] = $details["udate"] + $time_sec_chg;
	$details["subject"] = mb_convert_encoding($details["subject"], "UTF-8", "auto");
    echo  "<b>" . date("d", $details["udate"]) . "." . date("m", $details["udate"]) 
	. "." . date("y", $details["udate"]) . " " . date("H", $details["udate"]) 
	. ":" . date("i", $details["udate"]) . ":" . date("s", $details["udate"]) .
	"  " . "</b>" . $details["subject"] . "<br><br>";

}

imap_close($imap);
	//<a href="index.php?logout">выход</a>

?>

