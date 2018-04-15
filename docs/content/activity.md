### 创建一个新的活动

创建一个新的活动🆕 **需要管理员权限**

***此请求包含文件上传，请妥善处理***

```endpoint
POST /activity
```

属性 | 介绍
---|---
`name` | (必填) 活动名称
`content` | (必填) 活动介绍
`summary` | (必填) 活动简介
`endTime` | (必填) 结束时间
`cover` | (必填(*文件*)) 封面文件
`locale`| (必填)语言地区

#### Example response

```json
{
  "success": true,
  "response": {
    "date": {
      "created": "{创建时间戳}",
      "endTime": "{结束时间时间戳}"
    },
    "_id": "{对象ID}",
    "name": "{名称}",
    "content": "{内容}",
    "summary": "{简介}",
    "cover": "{封面文件}",
    "__v": 0
  }
}
```

### 获取活动列表

按页面数和限制获取活动列表

```endpoint
GET /activity?page={页面数}&limit={限制数量}&locale={语言地区}
```

#### Example response

```json
{
    "success": true,
    "response": [
        {
            "_id": "{对象ID}",
            "name": "{活动名称}",
            "summary": "{活动简介}",
            "cover": "{封面图片}"
        }
    ]
}
```

### 按对象ID获取活动

按对象ID活动活动详情🔎

```endpoint
GET /activity/detail?uid={对象ID}
```

#### Example response

```json
{
  "success": true,
  "response": {
    "date": {
      "created": "{创建时间戳}",
      "endTime": "{结束时间时间戳}"
    },
    "_id": "{对象ID}",
    "name": "{名称}",
    "content": "{内容}",
    "summary": "{简介}",
    "cover": "{封面文件}",
    "__v": 0
  }
}
```

### 按对象ID删除活动

按对象ID删除活动 **需要管理员权限**

```endpoint
DELETE /activity/delete
```

属性 | 介绍
---|---
`uid` | (必填) 对象ID

#### Example response

```json
{
    "success": true,
    "response": {
        "n": 1,
        "ok": 1
    }
}
```
