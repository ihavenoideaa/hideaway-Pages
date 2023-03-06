---
title: "Shortcodes"
description: "样式存放"
date: 2023-03-04T15:47:09+08:00
draft: true                            # 草稿模式  
tags: ["main"]
categories: ["intro"]
series: ["no"]
ShowToc: true
---
一些效果展示

### figure
{{< figure src="/images/2004gd/2022-12-3 a.png" title="Lighthouse (figure)" >}}

### image
{{< pic/image url="/images/2004gd/2022-12-3 a.png" discribe="◎图1. 通过 Hugo shortcode 插入图片，并在图片底部加入图片描述">}}


### 近期观影
{{< douban/movies-done>}}

### 豆瓣短代码
{{< douban/douban-done "https://movie.douban.com/subject/1296339/">}}

### 近期光影
{{< photos >}}

### 相册短代码
{{< pic/gallery "images/2004gd">}}

### 图片滑块
{{< pic/gallery-slider cos="/" dir="images/2004gd" auto-slide="2000">}}

### 图片动态展示


### 游戏短代码
{{< game "https://www.yystv.cn/g/4437/">}}

### 文章内链
{{< innerlink src="posts/quote.md" >}}  

2. [quote]({{< ref "quote.md" >}})
3. [quote]({{< relref "quote.md" >}})


### 音乐播放模块 
 {{< music/music id="002e4D4n44U4zE" type="song" server="tencent" >}}

<!--{{< music/netease 64803 0 >}}<!--1:自动播放，0：手动  会出现很多错误，但不影响使用-->


{{< music/music-simple-long mp3="/audio/topgun.mp3">}}

{{< music/music-simple-short src="/audio/topgun.mp3" caption="标题" >}}

{{< music/podcast src="https://file.yandaojiang.com/blog/music/topgun.mp3" img="https://file.yandaojiang.com/blog/music/1.png" >}}

### gist
{{< gist spf13 7896402 >}}  <!--# gist仓库 https://gist.github.com/spf13/7896402-->

### hightlight code
{{< highlight html >}}
<section id="main">
    <div>
        <h1 id="title">{{ .Title }}</h1>
        {{ range .Pages }}
            {{ .Render "summary"}}
        {{ end }}
    </div>
</section>
{{< /highlight >}}

### 块引用
{{< blockquote author="电影" link="https://irithys.com" title="《寻梦环游记》" >}}
死亡不是一切的终点，遗忘才是
{{< /blockquote >}}


### 终端短代码
{{< terminal "yandaojiang@Daojiang-macbook-pro" >}} [ydj-macbook-pro ~ % wget google.com --2023-01-28 16:21:18-- http://google.com/ 正在解析主机 google.com (google.com)... 198.18.4.194 正在连接 google.com (google.com)|198.18.4.194|:80... 已连接。 已发出 HTTP 请求，正在等待回应... 301 Moved Permanently 位置：http://www.google.com/ [跟随至新的 URL] --2023-01-28 16:21:18-- http://www.google.com/ 正在解析主机 www.google.com (www.google.com)... 198.18.0.13 正在连接 www.google.com (www.google.com)|198.18.0.13|:80... 已连接。 已发出 HTTP 请求，正在等待回应... 200 OK 长度：未指定 [text/html] 正在保存至: “index.html”
index.html [ <=> ] 14.67K --.-KB/s 用时 0.07s
2023-01-28 16:21:19 (209 KB/s) - “index.html” 已保存 [15021] [ydj-macbook-pro ~ % {{< /terminal >}}

### bilibli
<!--{{< bilibili BV1NF411J7JH >}}-->

### ppt短代码
{{< ppt src="https://www.sulvblog.cn//ppt/%E6%9C%80%E5%85%A8Linux%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E5%A4%A7%E5%85%A8.pdf" >}} 

### 时间轴
{{< timeline >}}

<div class="timeline-item">
    <div class="timeline-img"></div>
    <div class="timeline-content js--fadeInLeft">
        <p class="timeline-header">春</p>
        <div class="date">2022.12-2023.12</div>
        <p class="timeline-text">
            盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。小草偷偷地从土里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻悄悄的，草软绵绵的。</p>
        <!-- <a class="bnt-more" href="javascript:void(0)">More</a> -->
    </div>
</div>
<div class="timeline-item">
    <div class="timeline-img"></div>
    <div class="timeline-content timeline-card js--fadeInRight">
        <div class="timeline-img-header"
             style="background-image: url('https://picsum.photos/1000/800/?random')">
            <p>TCMalloc</p>
        </div>
        <div class="date">2022.05.06</div>
        <p class="timeline-text">This repository contains the TCMalloc C++ code.TCMalloc is Google’s customized implementation of C’s malloc() and C++’s operator new used for memory allocation within our C and C++ code. TCMalloc is a fast, multi-threaded malloc implementation.</p>
        <a class="bnt-more" href="https://google.github.io/tcmalloc/" target="_blank">More</a>
    </div>
</div>
<div class="timeline-item">
    <div class="timeline-img"></div>
    <div class="timeline-content timeline-card js--fadeInLeft">
        <div class="timeline-img-header"
             style="background-image: url('https://finua.org/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F60d97cba-0100-4544-b554-e4739eb4ccb6%2Fimages%2Ff948eeaa-e7f1-4e56-9115-bb0a6266d8df.jpg&w=750&q=80')">
            <p>TCMalloc</p>
        </div>
        <div class="date">2022.05.06</div>
        <p class="timeline-text">This repository contains the TCMalloc C++ code.TCMalloc is Google’s customized implementation of C’s malloc() and C++’s operator new used for memory allocation within our C and C++ code. TCMalloc is a fast, multi-threaded malloc implementation.</p>
        <a class="bnt-more" href="https://google.github.io/tcmalloc/" target="_blank">More</a>
    </div>
</div>
<!--图片式-->
<div class="timeline-item">
    <div class="timeline-img"></div>
    <div class="timeline-content timeline-card js--fadeInLeft">
        <div class="timeline-img-header" style="background-image: url('https://picsum.photos/1000/800/?random')">
            <p>上面图片</p>
        </div>
        <div class="date">时间</div>
        <p class="timeline-text">文字</p>
        <a class="bnt-more" href="https://google.github.io/tcmalloc/" target="_blank">More</a>
    </div>
</div>
<!--纯文字-->
<div class="timeline-item">
    <div class="timeline-img"></div>
    <div class="timeline-content js--fadeInLeft">
        <p class="timeline-header">标题</p>
        <div class="date">时间</div>
        <p class="timeline-text">
            内容。</p>
        <!-- <a class="bnt-more" href="javascript:void(0)">More</a> -->
    </div>
</div>

<div class="timeline-item">
    <div class="timeline-img"></div>
    <div class="timeline-content timeline-card js--fadeInLeft">
        <div class="timeline-img-header" style="background-image: url('https://picsum.photos/1000/800/?random')">
            <p>上面图片</p>
        </div>
        <div class="date"></div>
        <p class="timeline-text"></p>
        <a class="bnt-more" href="https://google.github.io/tcmalloc/" target="_blank">More</a>
    </div>
</div>
{{< /timeline >}}

