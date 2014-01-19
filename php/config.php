<?php

	header("Content-Type: text/html; charset=utf-8");
	$host        = '127.0.0.1';
	$port        =  143;
	$param       = '/imap/novalidate-cert';
	$folder      = 'INBOX';
	$username = 'stats@cyber-labs.ru';
	$password = '488321938';

        $time_sec_chg = 3600;

	$post_login = 'user';
	$post_pass = '1234';	

	$get_login = 'cpu';
	$get_pass = '123456';
	
?>