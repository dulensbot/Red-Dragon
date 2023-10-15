const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}

global.alivemsg = `(╭══════〘 ✯✯✯ 〙═══════╮*
║    
║     *◉—ʙᴏᴛ ʙʏ ᴅᴜʟᴇɴ—◉*
║    
║➤ Salutation: ᴅᴇᴀʀ,
║➤ Owner: ᴅᴜʟᴇɴ
║➤ Number: 94710769988
║➤ TikTok: @VIP_DULEYA
║➤ Telegram: @dulensathsara
║➤  Working: 💸
║➤  Support:  🆓
*╰══════〘✯✯✯ 〙═════╯*

╭══════•══════╮
┃  乃ＯＴ ＩＮＦＯ 
╰══════•══════╯
┏━━━━━━━━━━━┓
┣ *🎖 ʟᴇᴠᴇʟ:* 5 LV
┣ *🧰 ᴅʏɴᴏ:* 100H
┣ *⚓ ʙʀᴀɴᴄʜ:* MASTER
┣ *💎 ᴏᴡɴᴇʀ:* DULEN
┣*📡 ꜱᴇʀᴠᴇʀ:* HEROKU
┗━━━━━━━━━━━┛
┏━━━━━━━━━━━┓
┣  *📟 ᴠᴇʀꜱɪᴏɴ: 🆕*
┣ *🎟️  ᴘʀᴇᴍɪᴜᴍ: ✅*
┗━━━━━━━━━━━┛


*Ｍｒ- Ｄｕｌｅｎ. . .| 🕊️ </>*` //Costomize Alive Message (type your message in `` )


global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owner v card
global.vcardowner = ['+94778023384'] // owner number
global.ownername = "Ｍｒ- Ｄｕｌｅｎ. . .| 🕊️ </>" // owner name
global.ytname = "" // yt chanel name
global.socialm = "WhatsApp: 94710769988" // github or insta name
global.location = "Sri Lanka" // location

//bot body 
global.alivepic = `https://i.ibb.co/3fthNfK/e0e70b3f-e3de-4aee-97bd-149204fdd48c-1.jpg` // alive picture \\ use "https://ibb.com" to upload photos. < 1 MB

global.dragonchat = "false"  // chat bot  "true" / "false" (200 auto replies in this)
global.callblock = "true" // call block "true" / "false" ("true"  to block callers)
global.antibad = "false" // To remove bad word senders
global.antispam = "true" // To remove or block spammers
global.antilink = "false" // To remove group link sharing peoples
global.upsongvoice = "false" // true/false \\ bot can upload song as voice note (it use your data and storage bacause auto download) you can put "false" (anyone can't get songs as voice note / your data is not wasted)
global.welcom_msg = "false" // Welcome / Goodbye   [true/false]


global.owner = ['+94778023384']
global.ownertag = '+94778023384' //your tag number
global.botname = '𝙍𝙀𝘿╺ 𝘿𝙍𝘼𝙂𝙊𝙉' //ur bot name
global.packname = "Ｍｒ- Ｄｕｌｅｎ. . .| 🕊️ </>" // sticker packname
global.author = "Ｍｒ- Ｄｕｌｅｎ. . .| 🕊️ </>" // sticker author
global.dragonemoji = '🧩' // Menu emoji
global.footer = '[ ◉ ʀᴇᴅ-ᴅʀᴀɢᴏɴ-ᴍᴅ ]' //

//database
global.premium = ['+94710769988'] //ur premium numbers

//other
global.sessionName = '{
  "creds": {
    "noiseKey": {
      "private": {
        "type": "Buffer",
        "data": "gGuCZlb9nsW6nCJrtUGiWit1ecAxAGnoKLU5ZUr2UFc="
      },
      "public": {
        "type": "Buffer",
        "data": "zK5/55iRlhH3tylklSKwBWeP9OhNEUqhHBdK9qZFVAs="
      }
    },
    "signedIdentityKey": {
      "private": {
        "type": "Buffer",
        "data": "SEZYiLEMAIYwdk32sxz9Fxntd4GT5/P6A8RaEnBGtk0="
      },
      "public": {
        "type": "Buffer",
        "data": "+iptFv8pCk2CO6Igi9GusKLOCYtUtT2dvFthMu9+xjg="
      }
    },
    "signedPreKey": {
      "keyPair": {
        "private": {
          "type": "Buffer",
          "data": "UDGNqxGnWdzeOAEFQQBWs2zVVSTI/DQIs1S/sHa+IEs="
        },
        "public": {
          "type": "Buffer",
          "data": "Ozc4cIuH04weFLjVytQaMEJPTDAevu5CJgW1T4cya2U="
        }
      },
      "signature": {
        "type": "Buffer",
        "data": "9G9iKlMYD55o/3pFl3NlKo+JDpFeo19I3ewTs5O7V0Hd60EqFpJbxGk+v1Yktade7qVZ9FjgoYwiPlRn6KjWAw=="
      },
      "keyId": 1
    },
    "registrationId": 132,
    "advSecretKey": "TgRtwKHEiu+sPEulu+EcTCy5eFhiNCs8ZXcdFKqPzgc=",
    "nextPreKeyId": 31,
    "firstUnuploadedPreKeyId": 31,
    "serverHasPreKeys": true,
    "account": {
      "details": "CJWukc4FEK++r6kGGAE=",
      "accountSignatureKey": "9CEcZt/3HmA6vOegBvpKqAExQhNzpW8z2HpgxlSvPTo=",
      "accountSignature": "gD1ZAewpLigGJIyX2LsVNOeL4vm2k5TlR32ncQ/1PZHRWlntUCkGkzQftJJMhJp/uHhtZwZ9gygmtRQazvJ0DA==",
      "deviceSignature": "rq0Utnb5VeW1exkrfnlMIyRSqgK/ufdYKn9WLJ2jIGcOimMh5/7q08RdNJE+xIZqY8GFM10GCMVmIVCCv+JICQ=="
    },
    "me": {
      "id": "94778023384:1@s.whatsapp.net",
      "verifiedName": "",
      "name": "Dulen Sathsara"
    },
    "signalIdentities": [
      {
        "identifier": {
          "name": "94778023384:1@s.whatsapp.net",
          "deviceId": 0
        },
        "identifierKey": {
          "type": "Buffer",
          "data": "BfQhHGbf9x5gOrznoAb6SqgBMUITc6VvM9h6YMZUrz06"
        }
      }
    ],
    "lastAccountSyncTimestamp": 1697374004
  },
  "keys": {
    "preKeys": {
      "1": {
        "private": {
          "type": "Buffer",
          "data": "+Lqo6xZcI+ZGPWyKo0Q1eGUdG8jBlJKPYMAdjR4lZGM="
        },
        "public": {
          "type": "Buffer",
          "data": "we4iPuiU7/JP6WcHJLIhDoriRKNl1RG4zblWZC3Xi3Y="
        }
      },
      "2": {
        "private": {
          "type": "Buffer",
          "data": "6IK/3jhW7SxI3X41ZffSCyN2d1IQxM6cq3v2Tb0lr18="
        },
        "public": {
          "type": "Buffer",
          "data": "dUhtYx6KoZuFmGRlZCPsm6wezKm1RGmMnX3P6w8BBXM="
        }
      },
      "3": {
        "private": {
          "type": "Buffer",
          "data": "0PUAe4wkZDDjcoTBr3+P1lTCA4W/m/J5pTvszGeY/V4="
        },
        "public": {
          "type": "Buffer",
          "data": "tGfEO2P7X0nnQA1eHyJyufjBIDbBUEUP+D/wsPXgqVI="
        }
      },
      "4": {
        "private": {
          "type": "Buffer",
          "data": "cEDbrY3n3yx8XHPk8odEzFNX8l7Y56kLPMRlopTE+Xw="
        },
        "public": {
          "type": "Buffer",
          "data": "yEhUuaXHTmZOa8CEw5zTuke59Qc7WPzafU0F++2ejgw="
        }
      },
      "5": {
        "private": {
          "type": "Buffer",
          "data": "IJQnlraBefjpZGiZfIIZzDHgcw1khFxm29WsfZsb7WM="
        },
        "public": {
          "type": "Buffer",
          "data": "+JWjdhR9TG6Bx/u31Hf1a6KinE+UZJNtNTCsY5fdelI="
        }
      },
      "6": {
        "private": {
          "type": "Buffer",
          "data": "0Lmz2xo832Zr4vNcF9EOH9yQmxg3STD5tY5dbhPIp3I="
        },
        "public": {
          "type": "Buffer",
          "data": "/w/l1WZSGnDNKTmYSUG5ZJDsLLHjTScwApme1RTQvwM="
        }
      },
      "7": {
        "private": {
          "type": "Buffer",
          "data": "wAIn6zfcBTV1APRAwuSJeEOpbDaIwSLYDHIgT54xb0c="
        },
        "public": {
          "type": "Buffer",
          "data": "Y4Ica3on6S6W4pJZ+okGTB9oeNY9pbMj7clVulwLUjI="
        }
      },
      "8": {
        "private": {
          "type": "Buffer",
          "data": "KId9N1RwJD0vf7MbjzgEJnSncP9d1RwohbyPHcnYEmA="
        },
        "public": {
          "type": "Buffer",
          "data": "iqNhxJLlBkFflQJcj4g+Ki85qubN/kb6ovrjiYSTFh4="
        }
      },
      "9": {
        "private": {
          "type": "Buffer",
          "data": "+HqApm0nAGf6szFZ3ozjfjHMt/aaH8/1yZkaRJ08HGE="
        },
        "public": {
          "type": "Buffer",
          "data": "JDVWcRe5PqwSI1TzsALdlgRDu+ALk/YVRgfdHTG+BDU="
        }
      },
      "10": {
        "private": {
          "type": "Buffer",
          "data": "ENdzN/bdzSZ8or5lzCiKR5KA+eQbAGYFfKHkbpD8yXA="
        },
        "public": {
          "type": "Buffer",
          "data": "JJotghjqt4YBWmuOrTDarqjOwGf7q+n/Zx+S92C4mnQ="
        }
      },
      "11": {
        "private": {
          "type": "Buffer",
          "data": "OPW7Z/PArCQCwk7N9qvu+ly1m3wvFRhFlgjYbd2yG0A="
        },
        "public": {
          "type": "Buffer",
          "data": "Ilmr185vfeB3Uyx5iXGy0iv1Y/7ZmaPERwQQmuhlpmM="
        }
      },
      "12": {
        "private": {
          "type": "Buffer",
          "data": "GJoBHKB7vWzHWkw6nxTpLTh6qszv/OfviNADFbwy0E4="
        },
        "public": {
          "type": "Buffer",
          "data": "cwnskwGCRpEi/o3xLCph/CbhojLuYPJsB5LmY+jlrAk="
        }
      },
      "13": {
        "private": {
          "type": "Buffer",
          "data": "YC+0BaGon/4/wGXlXxinjG3J2jilaJZuRl3THxZfplk="
        },
        "public": {
          "type": "Buffer",
          "data": "SOmhubemB1kON0blJm+SB/SGWGBsxDJVHRdqHJvZBxI="
        }
      },
      "14": {
        "private": {
          "type": "Buffer",
          "data": "oIYMSoyb9HEIWd8HjFYR6mjibhZMvWzV5c/5NHP1CX0="
        },
        "public": {
          "type": "Buffer",
          "data": "vqzjRsFSFJ4bsPVFdlfVbBBBrwlwHQblCyv5pXSacA8="
        }
      },
      "15": {
        "private": {
          "type": "Buffer",
          "data": "MMD2ct8z9iS/EIg7vy/rtohTL59c2Ohk/Ace8HFkT1o="
        },
        "public": {
          "type": "Buffer",
          "data": "AC+pqjwUKQzwxxeUAulT4vbUU9vw979uP86MbnJmOnM="
        }
      },
      "16": {
        "private": {
          "type": "Buffer",
          "data": "QEhg9WOEMJ/Fa7byPaFWXTIZ/eRvULuV3nXvEnpQ41Y="
        },
        "public": {
          "type": "Buffer",
          "data": "tZKbeVEGbZlLpRbbpkDswSETTIH1CNX535G4ty9+Uz4="
        }
      },
      "17": {
        "private": {
          "type": "Buffer",
          "data": "gBmJJbORDdJ9z3RZRUAFKTQRm9rYboO+DqllSNkwGVE="
        },
        "public": {
          "type": "Buffer",
          "data": "dUKsV0hBDtw0kTnSZkrvpvnAIJgvIXm9kuv31g2DIFY="
        }
      },
      "18": {
        "private": {
          "type": "Buffer",
          "data": "OA1uwHyAh0PuAdNSsnn9sQ0L5w8GMnZHIsNk9TgcdEo="
        },
        "public": {
          "type": "Buffer",
          "data": "ZPbD/96IxtSTcG4bTIOFbgMsZocxRZU7l8Qby5k/8Ws="
        }
      },
      "19": {
        "private": {
          "type": "Buffer",
          "data": "eEm16WSMJK+cis6cjvVcyqCCkZqJ0AAyOa7JPSMEOWU="
        },
        "public": {
          "type": "Buffer",
          "data": "lBhDUuYob+bU3PVHnhgbBFfWic+lq9Nm13Iey40IhAg="
        }
      },
      "20": {
        "private": {
          "type": "Buffer",
          "data": "IHCTRcFSVXWtb17L+mMUvDwTMNpb3pUcpGBArWKvO00="
        },
        "public": {
          "type": "Buffer",
          "data": "Q1+b5D3KHf8FzczRste1ZpuPbrPRXRw2hMvyutPUzl0="
        }
      },
      "21": {
        "private": {
          "type": "Buffer",
          "data": "sM5gGjVNJfJ2IfBuqMg1xE30KyRAK8F/+BnV4lBSMUM="
        },
        "public": {
          "type": "Buffer",
          "data": "yZyPAJA0ipoNVpURbiFOW0AVM0cmuM6+ex4QmMT5akE="
        }
      },
      "22": {
        "private": {
          "type": "Buffer",
          "data": "oEn5EGTPez2ZWtOr+t1cv50WDLn/TYXnVc1Wu0vHgn8="
        },
        "public": {
          "type": "Buffer",
          "data": "8OGDaX3vK86EUMdutgZcQ7WtV+oWzcshtk6HhIQkyCM="
        }
      },
      "23": {
        "private": {
          "type": "Buffer",
          "data": "KOVIffuGeobDAkltMYrkxjGZTmiR01oyR0Lt7y7FUWs="
        },
        "public": {
          "type": "Buffer",
          "data": "6yDkjxzvwqDjcwbERKaf1LwmWg9Z9TXyaJz4wZhPBQo="
        }
      },
      "24": {
        "private": {
          "type": "Buffer",
          "data": "wOS2osMg0/HisVUsk9FyG3n5vAKjo8yyPAfOdS1TVUE="
        },
        "public": {
          "type": "Buffer",
          "data": "Re+UX7xiqFQx8OaCWE+TcXJ5Yu2NKcqp68rU2Lx7An4="
        }
      },
      "25": {
        "private": {
          "type": "Buffer",
          "data": "IBgUMuadfs4xgCyVN7JK0LCpP58/LOqePETzR6dcW1o="
        },
        "public": {
          "type": "Buffer",
          "data": "NodfFHpJ0yeZ3Emc3/b36jKkT3aZPO6Jq6M2RxGD9Hg="
        }
      },
      "26": {
        "private": {
          "type": "Buffer",
          "data": "qCs2RoqyDOdi+LGLoEeBdlpf94b7HayYEe1mbAQE734="
        },
        "public": {
          "type": "Buffer",
          "data": "bgY2M5JD78BLQPufQCcN+7NhkpXh87djtWaeeJmQW1c="
        }
      },
      "27": {
        "private": {
          "type": "Buffer",
          "data": "4I+XLxkN3n85CZHyzwCE+8kLUYFdJINIiJNDIYugMEY="
        },
        "public": {
          "type": "Buffer",
          "data": "McIrqFuh09+C4WmtluXrkqTH/yap5hmF362y8lnftwo="
        }
      },
      "28": {
        "private": {
          "type": "Buffer",
          "data": "UMy1lqnRZIELbG0SCbRt890zBdBRepJiJslpf2ERiFg="
        },
        "public": {
          "type": "Buffer",
          "data": "6ZMISKU1AmWdOvAEtzSfi1hXIkvYDUlsj6quy7kCRFM="
        }
      },
      "29": null,
      "30": {
        "private": {
          "type": "Buffer",
          "data": "6H+Mbkek5tokVvJRVjqagcELsQ0FkY/vM03H2peOBVI="
        },
        "public": {
          "type": "Buffer",
          "data": "+NbeJajg+YJZGbbrcHf7wnmGSwNz4KRnTp2Gu91XEgs="
        }
      }
    },
    "sessions": {
      "94778023384.0": {
        "_sessions": {
          "BUVvfhvHfk8865t9/TkSAu88h6mJrN1HLlnmo5uAhsg/": {
            "registrationId": 592292709,
            "currentRatchet": {
              "ephemeralKeyPair": {
                "pubKey": "BZqQKtgOrF0sj5hrOkEPrtdK+lhhUB7Ib601aapGGokR",
                "privKey": "IB1uTyTdZ/r3+XRcx+cqCwgpzaUPO0zolT09dxCUr1Q="
              },
              "lastRemoteEphemeralKey": "BUHXj9X8rZ+F757rSNWfOuqKsxkrddTepeqyDXU62vB7",
              "previousCounter": 0,
              "rootKey": "U2qlmWkXSydJ6hK/nHhEQDdFGvqrAB/25dhIYrWTm40="
            },
            "indexInfo": {
              "baseKey": "BUVvfhvHfk8865t9/TkSAu88h6mJrN1HLlnmo5uAhsg/",
              "baseKeyType": 2,
              "closed": -1,
              "used": 1697374009601,
              "created": 1697374009601,
              "remoteIdentityKey": "BfQhHGbf9x5gOrznoAb6SqgBMUITc6VvM9h6YMZUrz06"
            },
            "_chains": {
              "BUHXj9X8rZ+F757rSNWfOuqKsxkrddTepeqyDXU62vB7": {
                "chainKey": {
                  "counter": 0,
                  "key": "KftP4UffZsrdO2bgvXxGvVqlSALehWZAKAPoP4kYX7U="
                },
                "chainType": 2,
                "messageKeys": {}
              },
              "BZqQKtgOrF0sj5hrOkEPrtdK+lhhUB7Ib601aapGGokR": {
                "chainKey": {
                  "counter": -1,
                  "key": "ujxXWVJkgDsuVjTbq2wvDzAgU4QnVnvAZEqeofkbNTQ="
                },
                "chainType": 1,
                "messageKeys": {}
              }
            }
          }
        },
        "version": "v1"
      }
    }
  }
}'
global.antitags = false
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sp = '💠'
global.mess = {
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈 Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    linkm: 'Where is the link?',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban',
    badwords: '*🚫Bad Words Not Allowed Here !*\n\n⚠️ Warning... ⚠️',
    spam: '⚠️ [SPAM] Detected ⚠️\n\nThe emergency security system was activated.\n\nPowered By: *ʀᴇᴅ-ᴅʀᴀɢᴏɴ*',
    caption: 'Generated by: ◉ *ʀᴇᴅ-ᴅʀᴀɢᴏɴ-ʙᴏᴛ*'
} // END \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thum = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur error pic
global.thumb = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur thumb pic

global.thumb = fs.readFileSync('./Android/AllData/theme/repl.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []





































// DO NOT CHANGE THIS. ERROR WARNING දාන්න තැනක් නැතුව මෙතන දැම්මෙ.
global.rep = { // All Replies = 145
    K1: '🫢හායි😁❤️',
    K2: '🤭හූයි✌️💞🫶',
    K3: '😉🫶හායි😂',
    K4: '🥴හූයි😊',
    K5: '😂හේයි, හව් ආ යූ🥴✌️',
    K6: '😁Hey there💝 I am WhatsApp Bot😏',
    K7: '❣️ඇයි හලෝ😌',
    K8: '🙃මොකෝ හලෝ🥲',
    K9: '😒මොකෝ?',
    K10: '🥺ඇයි අනේ?❤️🫢',
    K11: '🌝❤️',
    K12: '😜හී හී😁හූ හූ',
    K13: '😁හී හී💞',
    K14: '😊හූ...',
    K15: 'ඇයි🥲',
    K16: '😂😂✌️',
    K17: '😐ආහ්',
    K18: 'චූටී තමයි😇',
    K19: '🥺🥺ඇයි සුදූ❤️💓',
    K20: 'කොහොමවත් නෑ ඉතිං😒',
    K21: '😁මන් දන්නෑ🥲',
    K22: 'හොඳයි තමා😌',
    K23: '😂😂මරු හැබැයි',
    K24: 'මලු🙃',
    K25: '😘😇❤️',
    K26: '😘😘මෙන්න ඔයාට💕',
    K27: '😊ඇත්තමද?❤️',
    K28: '☺️👻ඔය ඇත්තමද❤️',
    K29: 'ඇයි🙄',
    K30: '🥺✌️සිදෙනවද?',
    K31: '😐💔ඕවට එන්න එපා හරිත😒',
    K32: '😏අනේ මේ😒 යනෝ යන්න💔',
    K33: 'ඔයා තමයි හොරා😒 මගෙ හිත හොරකම් කළානෙ ඉතිං😌',
    K34: '😇මොකො හූම් ගාන්නෙ😒 බකමූනා',
    K35: '​😁😁මොකෝ හලෝ හූම් හූම් ගාන්නෙ?',
    K36: '😉නෑ අනේ මුකුත් නෑ😐🫠',
    K37: '😒ආහ්',
    K38: '✌️ඔව් නං එච්චරයි😌',
    K39: '😐හේ හේ නැද්ද?🫣',
    K40: '🙄මොනවටද ආස?',
    K41: '😌මාත් ආසයි😊💞',
    K42: 'එල😌',
    K43: 'බැරි නං නිකං ඉන්න😏',
    K44: '😂😂💔',
    K45: 'සුදුයි තමයි ඇයි මොකද?🙄',
    K46: '😇තාම කෑවෙ නෑ අනේ🥺',
    K47: 'බොන්නෑ😒',
    K48: 'නිදිමත නං දිදාගන්නකො වද දෙන්නැතුව😒😌❤️',
    K49: '😇දැම්ම නිදාගන්න බෑ අනේ😜 නිදිමත නෑ😁💞',
    K50: '😉මුකුත් නෑ අනේ🫡',
    K51: 'මොකද්ද දන්නෑ🥲',
    K52: '😝මම නං මුකුත් කරන්නෑ අනේ😁 ඔයාලා දිහා බලන් ඉන්නවා😌',
    K53: '🥺පාලුයි අනේ. අපි සෙල්ලමක් කරමුද?😊✌️',
    K54: '😌😁ආදරෙයි❤️',
    K55: '😌ආදලෙයි ඉතිං❤️❤️',
    K56: '🥺🥺ඇත්තද?',
    K57: '🥺අනේ ඒ මොකද?🥴',
    K58: '😒මටත් දුකයි ඒ ගැන😕',
    K59: '🤭ඉන්න බෑ අනේ😜',
    K60: '🫡මොකද අඬන්නෙ?😒',
    K61: '😉මොකද අයියෝ😂',
    K62: '😐මුකුත් දන්නැති අහින්සක මම😕💔',
    K63: '🚲හා යමු යමු😌',
    K64: '🥴දෙන්න බෑ😒',
    K65: '🙏පස්සෙ දෙන්නං🥲',
    K66: '😁බඩගිනි නෑ❤️😒',
    K67: '😳අම්මෝ හා හා🙏',
    K68: '😂ඇයි යකෝ😉😈',
    K69: '👻ඇයි හුයි😁 කෝං ගහේ නයි😂',
    K70: '🥲දන්නැත්තං නිකං ඉන්න😜',
    K71: '😂අපි තමයි හොඳටම කරේ🥲\n🤧රෙද්ද තමයි😂',
    K72: '🙄ආ හා 😏ගහපන් බලන්න💔👎',
    K73: 'හී😂😂😂💓',
    K74: 'වන්ඩර්පුල්🥲😂',
    K75: '😂ඕං බලන්නකො ඒකෙත් හැටි නේද🥴😂',
    K76: '😌එල',
    K77: '🥲මොකෝ ඩෝ😉❣️',
    K78: 'අඩෙහ්🙃😹',
    K79: 'ඔය කිව්වට ලොකු නෑ හොඳේ😏',
    K80: '😹මම නං පොඩී තමයි ඉතිං😌',
    K81: '🥴ටිකයි ද?😂',
    K82: '🥴ඒකි එහෙම නෑ බන්😅',
    K83: '🥲ඌ මොකද්ද කරේ?',
    K84: '😂එහෙම කියන්න එපා එයාලා පව්නෙ😐🤭',
    K85: 'හුම්ම්😌 පව් ඉතිං😂',
    K86: 'හා😒 කියනකං තමයි හිටියෙ🙏❣️',
    K87: 'මන් දන්නෑ🥲',
    K88: '  👀  ',
    K89: '🥺ගිහින් බේත් ගන්න',
    K90: '🥺ගොඩක් අමාරුද?☝️',
    K91: 'DSI පාරක් කන්න ආසද?😂',
    K92: 'කලිසම ගලවනෝකො ඉතිං😒',
    K93: 'අත ලෙප්ට්🥲',
    K94: '🫢🫢හරි නරකයි😒',
    K95: '😌මම නං කොහොමත් අහින්සකයි රටක් වටී😁❤️',
    K96: 'අතේ...🥲🥲🥲🥲🥲🥲',
    K97: '😐දාන්න බෑ😒',
    K98: '📱🔌පෝන එක චාජ් එකට ගහලා ඔය ළමයා ගිහින් වැඩක් කරගන්න😉',
    K99: '🫢🤭ඇයි? අසහනේ ද?🤨😏💔',
    K100: '💔පෙම් සිත රිදුනා සත්තලනේ🥺🤧',
    K101: '😹😹☝️',
    K102: 'බල්ලා පූසා මීයා හාවා නරියා අලියා😒',
    K103: '🥲උරුලා ගති තමා',
    K104: '😐කියන්න බෑ😒 ඇයි මොකෝ?🙄',
    K105: '😐අපි පැනල යමුද?🤭🫢',
    K106: '☝️ගියා නං ආයි එන්නෙපා😒',
    K107: '😅✌️😝',
    K108: '😂😂විහිලු නං කමක් නෑ😌',
    K109: 'මං තරහයි😒 ඇයි මොකෝ?👎',
    K110: 'ඇයි පකෝ🥲',
    K111: 'ලබ්බ😒',
    K112: 'මොන හුම්තක්ද යකෝ?🙄',
    K113: '😒පලෑන්න පොන්නය💔',
    K114: '🥲💔🙏',
    K115: '🥲🥲💔☝️',
    K116: '😏😑එන්නෙපා ගෑනි ගාගෙන🤨💔💔💔',
    K117: 'දැන්ම බෑ ළමයෝ🤭🤭 පස්සෙ දෙන්නං😝😒',
    K118: 'මොන පකක්ද?😒',
    K119: '😒👎',
    K120: 'එහෙම කියන්නෙපා පව්නෙ😒',
    K121: '🫢🙄',
    K122: 'අනේ තෝ හුකාගනිං🙂💔',
    K123: '😐උක්කමු😒😂😂',
    K124: 'ඇයි🙄 පුකද බලන්නෙ?',
    K125: 'උබේ දෙක ද?😂',
    K126: 'උබේ ද?😂',
    K127: '🥲මං ඇවිත් කටට ගන්නද?😒😝',
    K128: '😂😂හමෝ',
    K129: '😏ඕන්නැත්තං නිකං ඉන්න',
    K130: '🤭නිකං ඉන්න එපා ඇඳුමක් ඇඳගන්න😂❤️',
    K131: '😂😂🙏',
    K132: '😂🤭',
    K133: '😁',
    K134: '😏☝️',
    K135: 'අඬන්න එපා ඉතිං😒😝',
    K136: '🥴පිත්තු',
    K137: '🙂',
    K138: '😌😌',
    K139: '🥲🥲💔',
    K140: '😍🥰😘💞💕💓💗💖❣️❤️',
    K141: '😐🙄',
    K142: '🥺දුක් වෙන්න එපා ඉතිං❤️',
    K143: '🥺🥺😐',
    K144: '❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️',
    K145: '🫡🫠🤝',
    K146: '🎤දහසක් මල්🌸 විකසිත වන😊 මේ හිමිදිරි උදෑසනේ🌄 පතන්නම් ඔබ සැමට🙏 සුභම සුභ උදෑසනක් කියා...😃',
    K147: 'ලබන්නාවූ රාත්‍රිය හීනෙන් හොල්මන් පෙනෙන, මහ රෑ දාඩියෙන් තෙමී ඇහැරෙන, පෙරේතයන් ඇද යටට එන, කුම්භාණ්ඩයින් ජනෙල් වලින් එබී බලන, භයානක රාත්‍රියක් වේවා😂👻👻❤️'
    }






let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
