### 创建一个新的作品

创建一个新的作品🆕 **需要管理员权限**

***此请求包含***大量***文件上传，请妥善处理***

```endpoint
POST /work
```

属性 | 介绍
---|---
`name` | (必填) 活动名称
`content` | (必填) 活动介绍
`summary` | (必填) 活动简介
`endTime` | (必填) 结束时间
`cover` | (必填(*文件*)) 封面文件
`pdf` | (必填(*文件*)) PDF文件
`images` | (必填(*文件*)) 图片文件,最多32张

#### Example response

```json
{
  "success": true,
  "response": {
    "file": {
      "images": [
        {
          "filename": "{图片文件}"
        }
      ],
      "cover": "{封面图片}",
      "pdf": "{PDF文档}"
    },
    "created": "{创建时间戳}",
    "_id": "{对象ID}",
    "name": "{名称}",
    "summary": "{简介}",
    "view": 0,
    "__v": 0
  }
}
```

### 获取作品列表

按页面数和限制获取作品列表

```endpoint
GET /work?page={页面数}&limit={限制数量}
```

#### Example response

```json
{
    "success": true,
    "response": [
        {
            "file": {
                "cover": "{封面文件}"
            },
            "_id": "{对象ID}",
            "name": "{名称}",
            "summary": "{简介}"
        }
     ]
}
```

### 按对象ID获取作品

按对象ID作品详情🔎

```endpoint
GET /activity/detail?uid={对象ID}
```

#### Example response

```json
{
  "success": true,
  "response": {
    "file": {
      "images": [
        {
          "filename": "{图片文件}"
        }
      ],
      "cover": "{封面图片}",
      "pdf": "{PDF文档}"
    },
    "created": "{创建时间戳}",
    "_id": "{对象ID}",
    "name": "{名称}",
    "summary": "{简介}",
    "view": 0,
    "__v": 0
  }
}
```

### 按对象ID删除作品

按对象ID删除活动 **需要管理员权限**

```endpoint
DELETE /work/delete
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
