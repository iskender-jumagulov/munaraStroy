<?php

require_once('FormProcessor.php');

$form = array(
    'subject' => 'номер',
    'email_message' => 'номер телефона',
    'success_redirect' => '',
    'sendIpAddress' => true,
    'email' => array(
    'from' => 'rinni499@gmail.com',
    'to' => 'tredlock1@gmail.com'
    ),
    'fields' => array(
    'phone' => array(
    'order' => 1,
    'type' => 'tel',
    'label' => 'Телефон*',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Телефон*\' is required.'
    )
    ),
    )
    );

    $processor = new FormProcessor('');
    $processor->process($form);

    ?>