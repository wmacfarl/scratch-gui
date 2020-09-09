import ScratchBlocks from 'scratch-blocks';

const categorySeparator = '<sep gap="36"/>';

const blockSeparator = '<sep gap="36"/>'; // At default scale, about 28px

const getBlockXML = function (opcode, targetId, costumeName, backdropName, soundName){
    const hello = ScratchBlocks.ScratchMsgs.translate('LOOKS_HELLO', 'Hello!');
    const hmm = ScratchBlocks.ScratchMsgs.translate('LOOKS_HMM', 'Hmm...');
    const name = ScratchBlocks.ScratchMsgs.translate('SENSING_ASK_TEXT', 'What\'s your name?');
    const apple = ScratchBlocks.ScratchMsgs.translate('OPERATORS_JOIN_APPLE', 'apple');
    const banana = ScratchBlocks.ScratchMsgs.translate('OPERATORS_JOIN_BANANA', 'banana');
    const letter = ScratchBlocks.ScratchMsgs.translate('OPERATORS_LETTEROF_APPLE', 'a');

    switch (opcode){
    case 'motion_movesteps': return `        
        <block type="motion_movesteps">
            <value name="STEPS">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>`;

    case 'motion_turnright' : return `
        <block type="motion_turnright">
        <value name="DEGREES">
            <shadow type="math_number">
                <field name="NUM">15</field>
            </shadow>
        </value>
        </block>`;

    case 'motion_turnleft': return `
        <block type="motion_turnleft">
            <value name="DEGREES">
                <shadow type="math_number">
                    <field name="NUM">15</field>
             </shadow>
            </value>
        </block>`;

    case 'motion_goto': return `
        <block type="motion_goto">
            <value name="TO">
                <shadow type="motion_goto_menu">
                </shadow>
            </value>
            </block>`;

    case 'motion_gotoxy':return `
        <block type="motion_gotoxy">
        <value name="X">
            <shadow id="movex" type="math_number">
                <field name="NUM">0</field>
        </shadow>
    </value>
    <value name="Y">
        <shadow id="movey" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    </block>`;

    case 'motion_glideto': return `
    <block type="motion_glideto" id="motion_glideto">
    <value name="SECS">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="TO">
        <shadow type="motion_glideto_menu">
        </shadow>
    </value>
    </block>`;

    case 'motion_glidesectoxy': return `
    <block type="motion_glidesecstoxy">
    <value name="SECS">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="X">
        <shadow id="glidex" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    <value name="Y">
        <shadow id="glidey" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    </block>`;

    case 'motion_pointindirection': return `
    <block type="motion_pointindirection">
    <value name="DIRECTION">
        <shadow type="math_angle">
            <field name="NUM">90</field>
        </shadow>
    </value>
    </block>`;

    case 'motion_pointtowards': return `
    <block type="motion_pointtowards">
    <value name="TOWARDS">
        <shadow type="motion_pointtowards_menu">
        </shadow>
    </value>
    </block>`;

    case 'motion_changexby': return `
    <block type="motion_changexby">
    <value name="DX">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
    </block>`;
    
    case 'motion_setx': return `
    <block type="motion_setx">
    <value name="X">
        <shadow id="setx" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    </block>`;

    case 'motion_changeyby': return `
    <block type="motion_changeyby">
    <value name="DY">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
    </block>`;

    case ' motion_sety': return `
    <block type="motion_sety">
    <value name="Y">
        <shadow id="sety" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    </block>`;

    case 'motion_ifonedgebounce': return `
    <block type="motion_ifonedgebounce"/>`;
    
    case 'motion_setrotationstyle': return `
    <block type="motion_setrotationstyle"/>`;

    case 'motion_xposition': return `<block id="${targetId}_xposition" type="motion_xposition"/>`;
    case 'motion_yposition': return `<block id="${targetId}_yposition" type="motion_yposition"/>`;
    case 'motion_direction': return `<block id="${targetId}_direction" type="motion_direction"/>`;

    case 'looks_sayforsecs': return `<block type="looks_sayforsecs">
        <value name="MESSAGE">
            <shadow type="text">
                <field name="TEXT">${hello}</field>
            </shadow>
        </value>
        <value name="SECS">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>`;

    case 'looks_say' : return `
    <block type="looks_say">
        <value name="MESSAGE">
            <shadow type="text">
                <field name="TEXT">${hello}</field>
            </shadow>
        </value>
    </block>`;

    case 'looks_thinkforsecs' : return `
    <block type="looks_thinkforsecs">
        <value name="MESSAGE">
            <shadow type="text">
                <field name="TEXT">${hmm}</field>
            </shadow>
        </value>
        <value name="SECS">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>`;

    case 'looks_think' : return `
    <block type="looks_think">
        <value name="MESSAGE">
            <shadow type="text">
                <field name="TEXT">${hmm}</field>
            </shadow>
        </value>
    </block>`;

    case 'looks_switchbackdropto' : return `
        <block type="looks_switchbackdropto">
            <value name="BACKDROP">
                <shadow type="looks_backdrops">
                    <field name="BACKDROP">${backdropName}</field>
                </shadow>
            </value>
        </block>
        `;
    case 'looks_switchbackdroptoandwait' : return `
        <block type="looks_switchbackdroptoandwait">
            <value name="BACKDROP">
                <shadow type="looks_backdrops">
                    <field name="BACKDROP">${backdropName}</field>
                </shadow>
            </value>
        </block>`;

    case 'looks_nextbackdrop' : return `<block type="looks_nextbackdrop"/>`;
    
    case 'looks_switchcostumeto' : return `
        <block id="${targetId}_switchcostumeto" type="looks_switchcostumeto">
            <value name="COSTUME">
                <shadow type="looks_costume">
                    <field name="COSTUME">${costumeName}</field>
                </shadow>
            </value>
        </block>`;
    
    case 'looks_nextcostume' : return `<block type="looks_nextcostume"/>`;

    case 'looks_changesizeby' : return `<block type="looks_changesizeby">
            <value name="CHANGE">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>`;

    case 'looks_setsizeto' : return `
        <block type="looks_setsizeto">
            <value name="SIZE">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>`;

    case 'looks_changeeffectby' : return `
        <block type="looks_changeeffectby">
        <value name="CHANGE">
            <shadow type="math_number">
                <field name="NUM">25</field>
            </shadow>
        </value>
    </block>`;
    
    case 'looks_seteffectto' : return `
    <block type="looks_seteffectto">
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>`;

    case 'looks_cleargraphiceffects' : return `<block type="looks_cleargraphiceffects"/>`;
    case 'looks_show' : return `<block type="looks_show"/>`;
    case 'looks_hide' : return `<block type="looks_hide"/>`;
    case 'looks_gotofrontback' : return `<block type="looks_gotofrontback"/>`;
    case 'looks_goforwardbackwardlayers' : return `
        <block type="looks_goforwardbackwardlayers">
            <value name="NUM">
                <shadow type="math_integer">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
    `;
    case 'looks_backdropnumbername' : return `<block id="backdropnumbername" type="looks_backdropnumbername"/>`;
    case 'looks_costumenumbername' : return `
        <block id="${targetId}_costumenumbername" type="looks_costumenumbername"/>`;

    case 'looks_size' : return `<block id="${targetId}_size" type="looks_size"/>`;

    case 'sound_playuntildone' : return `
    <block id="${targetId}_sound_playuntildone" type="sound_playuntildone">
    <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu">
            <field name="SOUND_MENU">${soundName}</field>
        </shadow>
    </value>
    </block>`;

    case 'sound_play' : return `
    <block id="${targetId}_sound_play" type="sound_play">
    <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu">
            <field name="SOUND_MENU">${soundName}</field>
        </shadow>
    </value>
    </block>`;

    case 'sound_stopallsounds' : return `<block type="sound_stopallsounds"/>`;
    case 'sound_changeeffectby' : return `
        <block type="sound_changeeffectby">
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        </block>`;
    case 'sound_seteffectto' : return `
        <block type="sound_seteffectto">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
    `;
    case 'sound_cleareffects' : return `<block type="sound_cleareffects"/>`;
    case 'sound_changevolumeby' : return `
        <block type="sound_changevolumeby">
            <value name="VOLUME">
                <shadow type="math_number">
                    <field name="NUM">-10</field>
                </shadow>
            </value>
        </block>`;
    case 'sound_setvolumeto' : return `
        <block type="sound_setvolumeto">
            <value name="VOLUME">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>`;
    
    case 'sound_volume' : return `<block id="${targetId}_volume" type="sound_volume"/>`;

    case 'event_whenflagclicked' : return `<block type="event_whenflagclicked"/>`;
    case 'event_whenkeypressed' : return `<block type="event_whenkeypressed"></block>`;
    case 'event_whenstageclicked' : return `<block type="event_whenstageclicked"/>`;
    case 'event_whenthisspriteclicked' : return `<block type="event_whenthisspriteclicked"/>`;
    case 'event_whenbackdropswitchesto' : return `<block type="event_whenbackdropswitchesto"></block>`;
    case 'event_whengreaterthan' : return `
        <block type="event_whengreaterthan">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>`;
    case 'event_whenbroadcastreceived' : return `<block type="event_whenbroadcastreceived"></block>`;
    case 'event_broadcast' : return `<block type="event_broadcast">
        <value name="BROADCAST_INPUT">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
    </block>`;

    case 'event_broadcastandwait' : return `<block type="event_broadcastandwait">
        <value name="BROADCAST_INPUT">
          <shadow type="event_broadcast_menu"></shadow>
        </value>
    </block>`;
    
    case 'control_wait' : return `
        <block type="control_wait">
            <value name="DURATION">
                <shadow type="math_positive_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>`;
    case 'control_repeat' : return `
        <block type="control_repeat">
            <value name="TIMES">
                <shadow type="math_whole_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>`;
    case 'control_forever' : return `<block id="forever" type="control_forever"/>`;
    case 'control_if' : return `<block type="control_if"/>`;
    case 'control_if_else' : return `<block type="control_if_else"/>`;
    case 'control_wait_until' : return `<block id="wait_until" type="control_wait_until"/>`;
    case 'control_repeat_until' : return `<block id="repeat_until" type="control_repeat_until"/>`;
    case 'control_stop' : return `<block type="control_stop"/>`;
    case 'control_create_clone_of' : return `
        <block type="control_create_clone_of">
            <value name="CLONE_OPTION">
            <shadow type="control_create_clone_of_menu"/>
            </value>
        </block>`;

    case 'control_start_as_clone' : return `<block type="control_start_as_clone"/>`;
    case 'control_delete_this_clone' : return `<block type="control_delete_this_clone"/>`;
    case 'sensing_touchingobject' : return `
        <block type="sensing_touchingobject">
            <value name="TOUCHINGOBJECTMENU">
            <shadow type="sensing_touchingobjectmenu"/>
            </value>
        </block>`;
    case 'sensing_touchingcolor' : return `
        <block type="sensing_touchingcolor">
            <value name="COLOR">
                <shadow type="colour_picker"/>
            </value>
        </block>`;
    case 'sensing_coloristouchingcolor' : return `
        <block type="sensing_coloristouchingcolor">
            <value name="COLOR">
                <shadow type="colour_picker"/>
            </value>
            <value name="COLOR2">
                <shadow type="colour_picker"/>
            </value>
        </block>`;
    case 'sensing_distanceto' : return `
        <block type="sensing_distanceto">
            <value name="DISTANCETOMENU">
                <shadow type="sensing_distancetomenu"/>
            </value>
        </block>`;
    case 'sensing_askandwait' : return `
        <block id="askandwait" type="sensing_askandwait">
            <value name="QUESTION">
                <shadow type="text">
                    <field name="TEXT">${name}</field>
                </shadow>
            </value>
        </block>`;
    case 'sensing_answer' : return `<block id="answer" type="sensing_answer"/>`;
    case 'sensing_keypressed' : return `
        <block type="sensing_keypressed">
            <value name="KEY_OPTION">
                <shadow type="sensing_keyoptions"/>
            </value>
        </block>`;
    case 'sensing_mousedown' : return `<block type="sensing_mousedown"/>`;
    case 'sensing_mousex' : return `<block type="sensing_mousex"/>`;
    case 'sensing_mousey' : return `<block type="sensing_mousey"/>`;
    case 'sensing_setdragmode' : return `<block type="sensing_setdragmode" id="sensing_setdragmode"></block>`;
    case 'sensing_loudness' : return `<block id="loudness" type="sensing_loudness"/>`;
    case 'sensing_timer' : return `<block id="timer" type="sensing_timer"/>`;
    case 'sensing_resettimer' : return `<block type="sensing_resettimer"/>`;
    case 'sensing_of' : return `
        <block id="of" type="sensing_of">
            <value name="OBJECT">
                <shadow id="sensing_of_object_menu" type="sensing_of_object_menu"/>
            </value>
        </block>`;
    case 'sensing_current' : return `<block id="current" type="sensing_current"/>`;
    case 'sensing_dayssince2000' : return `<block type="sensing_dayssince2000"/>`;
    case 'sensing_username' : return `<block type="sensing_username"/>`;

    case 'operator_add' : return `
        <block type="operator_add">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>`;
    
    case 'operator_subtract' : return `
        <block type="operator_subtract">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>`;

    case 'operator_multiply' : return `
        <block type="operator_multiply">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>`;

    case 'operator_divide' : return `
        <block type="operator_divide">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>`;

    case 'operator_random' : return `
        <block type="operator_random">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>`;

    case 'operator_gt' : return `
        <block type="operator_gt">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>`;

    case 'operator_lt' : return `
        <block type="operator_lt">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>`;

    case 'operator_equals' : return `
        <block type="operator_equals">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>`;

    case 'operator_and' : return `<block type="operator_and"/>`;
    case 'operator_or' : return `<block type="operator_or"/>`;
    case 'operator_not' : return `<block type="operator_not"/>`;
    case 'operator_join' : return `
        <block type="operator_join">
            <value name="STRING1">
                <shadow type="text">
                    <field name="TEXT">${apple} </field>
                </shadow>
            </value>
            <value name="STRING2">
                <shadow type="text">
                    <field name="TEXT">${banana}</field>
                </shadow>
            </value>
        </block>`;
    case 'operator_letter_of' : return `
        <block type="operator_letter_of">
            <value name="LETTER">
                <shadow type="math_whole_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="STRING">
                <shadow type="text">
                    <field name="TEXT">${apple}</field>
                </shadow>
            </value>
        </block>`;
    case 'operator_length' : return `
        <block type="operator_length">
            <value name="STRING">
                <shadow type="text">
                    <field name="TEXT">${apple}</field>
                </shadow>
            </value>
        </block>`;
    case 'operator_contains' : return `
        <block type="operator_contains" id="operator_contains">
          <value name="STRING1">
            <shadow type="text">
              <field name="TEXT">${apple}</field>
            </shadow>
          </value>
          <value name="STRING2">
            <shadow type="text">
              <field name="TEXT">${letter}</field>
            </shadow>
          </value>
        </block>`;
    case 'operator_mod' : return `
        <block type="operator_mod">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>`;
    case 'operator_round' : return `
        <block type="operator_round">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>`;
    case 'operator_mathop' : return `
        <block type="operator_mathop">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>`;
    }
};


/* eslint-disable no-unused-vars */
const motion = function (isInitialSetup, isStage, targetId, workspace) {
    const stageSelected = ScratchBlocks.ScratchMsgs.translate(
        'MOTION_STAGE_SELECTED',
        'Stage selected: no motion blocks'
    );

    return `
    <category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="#4C97FF" secondaryColour="#3373CC">
        ${isStage ? `
        <label text="${stageSelected}"></label>
        ` : `
        
        ${getBlockXML('motion_movesteps', targetId)}
        ${getBlockXML('motion_turnright', targetId)}
        ${getBlockXML('motion_turnleft', targetId)}
        ${blockSeparator}
        ${getBlockXML('motion_goto', targetId)}
        ${getBlockXML('motion_gotoxy', targetId)}
        ${getBlockXML('motion_glideto', targetId)}
        ${getBlockXML('motion_glidesecstoxy', targetId)}
        
        ${blockSeparator}
        ${getBlockXML('motion_pointindirection', targetId)}
        ${getBlockXML('motion_pointtowards', targetId)}
        ${blockSeparator}
        ${getBlockXML('motion_changexby', targetId)}
        ${getBlockXML('motion_setx', targetId)}
        ${getBlockXML('motion_changeyby', targetId)}
        ${getBlockXML('motion_sety', targetId)}
        ${blockSeparator}
        ${getBlockXML('motion_ifonedgebounce', targetId)}
        ${blockSeparator}
        ${getBlockXML('motion_setrotationstyle', targetId)}
        ${blockSeparator}
        ${getBlockXML('xposition', targetId)}
        ${getBlockXML('yposition', targetId)}
        ${getBlockXML('direction', targetId)}
        ${getBlockXML('data_changevariableby', targetId, void 0, void 0, void 0, 'my variable', workspace)}
        `}
        ${categorySeparator}
    </category>
    `;
};

const xmlEscape = function (unsafe) {
    return unsafe.replace(/[<>&'"]/g, c => {
        switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
        }
    });
};

const looks = function (isInitialSetup, isStage, targetId, costumeName, backdropName) {
    return `
    <category name="%{BKY_CATEGORY_LOOKS}" id="looks" colour="#9966FF" secondaryColour="#774DCB">
        ${isStage ? '' : `
        ${getBlockXML('looks_sayforsecs')}
        ${getBlockXML('looks_say')}
        ${getBlockXML('looks_thinkforsecs')}
        ${getBlockXML('looks_think')}
        ${blockSeparator}
        `}
        ${isStage ? `
            ${getBlockXML('looks_switchbackdropto', targetId, costumeName, backdropName)}
            ${getBlockXML('looks_switchbackdroptoandwait', targetId, costumeName, backdropName)}
            ${getBlockXML('looks_nextbackdrop')}
        ` : `
            ${getBlockXML('looks_switchcostumeto', targetId, costumeName, backdropName)}
            ${getBlockXML('looks_nextcostume')}
            ${getBlockXML('looks_switchbackdropto', targetId, costumeName, backdropName)}
            ${getBlockXML('looks_nextbackdrop')}
            ${blockSeparator}
            ${getBlockXML('looks_changesizeby')}
            ${getBlockXML('looks_setsizeto')}
        `}
        ${blockSeparator}
        ${getBlockXML('looks_changeeffectby')}
        ${getBlockXML('looks_seteffectto')}
        ${getBlockXML('looks_cleargraphiceffects')}
        ${blockSeparator}
        ${isStage ? '' : `
        ${getBlockXML('looks_show')}
        ${getBlockXML('looks_hide')}
        ${blockSeparator}
        ${getBlockXML('looks_gotofrontback')}
        ${getBlockXML('looks_goforwardbackwardlayers')}
        `}
        ${isStage ? `
        ${getBlockXML('looks_backdropnumbername')}
        ` : `
        ${getBlockXML('looks_costumenumbername')}
        ${getBlockXML('looks_backdropnumbername')}
        ${getBlockXML('looks_size')}
        `}
        ${categorySeparator}
    </category>
    `;
};

const sound = function (isInitialSetup, isStage, targetId, soundName) {
    return `
    <category name="%{BKY_CATEGORY_SOUND}" id="sound" colour="#D65CD6" secondaryColour="#BD42BD">
    ${getBlockXML('_sound_playuntildone', targetId, void 0, void 0, soundName)}
    ${getBlockXML('sound_play', targetId, void 0, void 0, soundName)}
    ${getBlockXML('sound_stopallsounds', targetId, void 0, void 0, soundName)}
    ${blockSeparator}
    ${getBlockXML('sound_changeeffectby', targetId, void 0, void 0, soundName)}
    ${getBlockXML('sound_seteffectto', targetId, void 0, void 0, soundName)}
    ${getBlockXML('sound_cleareffects', targetId, void 0, void 0, soundName)}
    ${blockSeparator}
    ${getBlockXML('sound_changevolumeby', targetId, void 0, void 0, soundName)}
    ${getBlockXML('sound_setvolumeto', targetId, void 0, void 0, soundName)}
    ${getBlockXML('sound_volume', targetId, void 0, void 0, soundName)}
        ${categorySeparator}
    </category>
    `;
};

const events = function (isInitialSetup, isStage) {
    return `
    <category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FFD500" secondaryColour="#CC9900">
        ${getBlockXML('event_whenflagclicked')}
        ${getBlockXML('event_whenkeypressed')}
        ${isStage ? `
        ${getBlockXML('event_whenstageclicked')}
        ` : `
        ${getBlockXML('event_whenthisspriteclicked')}
        `}
        ${getBlockXML('event_whenbackdropswitchesto')}
        ${blockSeparator}
        ${getBlockXML('event_whengreaterthan')}
        ${blockSeparator}
        ${getBlockXML('event_whenbroadcastreceived')}
        ${getBlockXML('event_broadcast')}
        ${getBlockXML('event_broadcastandwait')}
        ${categorySeparator}
    </category>
    `;
};

const control = function (isInitialSetup, isStage) {
    return `
    <category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#FFAB19" secondaryColour="#CF8B17">
        ${getBlockXML('control_wait')}
        ${blockSeparator}
        ${getBlockXML('control_repeat')}
        ${getBlockXML('control_forever')}
        ${blockSeparator}
        ${getBlockXML('control_if')}
        ${getBlockXML('control_if_else')}
        ${getBlockXML('control_wait_until')}
        ${getBlockXML('control_repeat_until')}
        ${blockSeparator}
        ${getBlockXML('control_stop')}
        ${blockSeparator}
        ${isStage ? `
        ${getBlockXML('control_create_clone_of')}
        ` : `
        ${getBlockXML('control_start_as_clone')}
        ${getBlockXML('control_create_clone_of')}
        ${getBlockXML('control_delete_this_clone')}
        `}
        ${categorySeparator}
    </category>
    `;
};

const sensing = function (isInitialSetup, isStage) {
    return `
    <category name="%{BKY_CATEGORY_SENSING}" id="sensing" colour="#4CBFE6" secondaryColour="#2E8EB8">
        ${isStage ? '' : `
            ${getBlockXML('sensing_touchingobject')}
            ${getBlockXML('sensing_touchingcolor')}
            ${getBlockXML('sensing_coloristouchingcolor')}
            ${getBlockXML('sensing_distanceto')}
            ${blockSeparator}
        `}
        ${isInitialSetup ? '' : `
        
            ${getBlockXML('sensing_askandwait')}
        `}
        ${getBlockXML('sensing_answer')}
        ${blockSeparator}
        ${getBlockXML('sensing_keypressed')}
        ${getBlockXML('sensing_mousedown')}
        ${getBlockXML('sensing_mousex')}
        ${getBlockXML('sensing_mousey')}
        ${isStage ? '' : `
            ${blockSeparator}
            ${getBlockXML('sensing_setdragmode')}
            ${blockSeparator}
        `}
        ${blockSeparator}
        ${getBlockXML('sensing_loudness')}
        ${blockSeparator}
        ${getBlockXML('sensing_timer')}
        ${getBlockXML('sensing_resettimer')}
        ${blockSeparator}
        ${getBlockXML('sensing_of')}
        
        ${blockSeparator}
        ${getBlockXML('sensing_current')}
        ${getBlockXML('sensing_dayssince2000')}
        ${blockSeparator}
        ${getBlockXML('sensing_username')}
        ${categorySeparator}
    </category>
    `;
};

const operators = function (isInitialSetup) {
    return `
    <category name="%{BKY_CATEGORY_OPERATORS}" id="operators" colour="#40BF4A" secondaryColour="#389438">
        ${getBlockXML('operator_add')}        
        ${getBlockXML('operator_subtract')}        
        ${getBlockXML('operator_multiply')}        
        ${getBlockXML('operator_divide')}        
        ${blockSeparator}
        ${getBlockXML('operator_random')}  
        ${blockSeparator}
        ${getBlockXML('operator_gt')}        
        ${getBlockXML('operator_lt')}        
        ${getBlockXML('operator_equals')}        
        ${blockSeparator}
        ${getBlockXML('operator_and')}        
        ${getBlockXML('operator_or')}        
        ${getBlockXML('operator_not')}        
        ${blockSeparator}
        ${isInitialSetup ? '' : `
            ${getBlockXML('operator_join')}        
            ${getBlockXML('operator_letter_of')}        
            ${getBlockXML('operator_length')}        
            ${getBlockXML('operator_contains')}        
        `}
        ${blockSeparator}
        ${getBlockXML('operator_mod')}        
        ${getBlockXML('operator_round')}        
        ${blockSeparator}
        ${getBlockXML('operator_mathop')}        
        ${categorySeparator}
    </category>
    `;
};

const customToolbox = function (isInitialSetup, isStage, customBlockPalette, targetId, 
    costumeName, backdropName, soundName){
    let blocksXML = '';
    customBlockPalette.forEach(opcode => {
        blocksXML += getBlockXML(opcode, targetId, costumeName, backdropName, soundName)
    });

    return `<category name="Custom Palette" id="operators" colour="#40BF4A" secondaryColour="#389438">
    ${blocksXML}
    </category>`;
};

const variables = function () {
    return `
    <category
        name="%{BKY_CATEGORY_VARIABLES}"
        id="variables"
        colour="#FF8C1A"
        secondaryColour="#DB6E00"
        custom="VARIABLE">
    </category>
    `;
};

const myBlocks = function () {
    return `
    <category
        name="%{BKY_CATEGORY_MYBLOCKS}"
        id="myBlocks"
        colour="#FF6680"
        secondaryColour="#FF4D6A"
        custom="PROCEDURE">
    </category>
    `;
};
/* eslint-enable no-unused-vars */

const xmlOpen = '<xml style="display: none">';
const xmlClose = '</xml>';

/**
 * @param {!boolean} isInitialSetup - Whether the toolbox is for initial setup. If the mode is "initial setup",
 * blocks with localized default parameters (e.g. ask and wait) should not be loaded. (LLK/scratch-gui#5445)
 * @param {?boolean} isStage - Whether the toolbox is for a stage-type target. This is always set to true
 * when isInitialSetup is true.
 * @param {?string} targetId - The current editing target
 * @param {?Array.<object>} categoriesXML - optional array of `{id,xml}` for categories. This can include both core
 * and other extensions: core extensions will be placed in the normal Scratch order; others will go at the bottom.
 * @property {string} id - the extension / category ID.
 * @property {string} xml - the `<category>...</category>` XML for this extension / category.
 * @param {?string} costumeName - The name of the default selected costume dropdown.
 * @param {?string} backdropName - The name of the default selected backdrop dropdown.
 * @param {?string} soundName -  The name of the default selected sound dropdown.
 *
 * @returns {string} - a ScratchBlocks-style XML document for the contents of the toolbox.
 */

const makeCustomToolboxXML = function (isInitialSetup, isStage = true, targetId, categoriesXML = [],
    costumeName = '', backdropName = '', soundName = '', customBlockPalette) {

    isStage = isInitialSetup || isStage;
    const gap = [categorySeparator];

    costumeName = xmlEscape(costumeName);
    backdropName = xmlEscape(backdropName);
    soundName = xmlEscape(soundName);
    categoriesXML = categoriesXML.slice();
    const customToolboxXML = customToolbox(isInitialSetup, isStage, customBlockPalette, targetId, costumeName, backdropName, soundName);
    const variablesXML = variables(isInitialSetup, isStage, targetId);
    const myBlocksXML = myBlocks(isInitialSetup, isStage, targetId);

    const everything = [
        xmlOpen,
        customToolboxXML, gap,
        variablesXML, gap,
        myBlocksXML
    ];

    for (const extensionCategory of categoriesXML) {
        everything.push(gap, extensionCategory.xml);
    }

    everything.push(xmlClose);
    return everything.join('\n');


};

const getCustomBlockPalette = function (target){
    console.log(target);
    const magicProperty = `${target.sprite.name}BlockPalette`;
    if (target.comments.hasOwnProperty(magicProperty)){
        const paletteString = target.comments[magicProperty].text;
        return paletteString.split('\n');
    }
    return null;
}

export default {makeCustomToolboxXML, getCustomBlockPalette};
