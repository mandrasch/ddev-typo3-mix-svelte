<?php
defined('TYPO3') or die('Access denied.');


call_user_func(function()
{

    /**
     * Temporary variables
     */
    $extensionKey = 'svelte-demo';

    /**
     * Default TypoScript for SvelteDemo
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        $extensionKey,
        'Configuration/TypoScript',
        'svelte demo'
    );

    /*\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript(
      $extensionKey,
      'setup',
      "@import 'EXT:svelte-demo/Configuration/TypoScript/setup.typoscript'"
   );*/
});
