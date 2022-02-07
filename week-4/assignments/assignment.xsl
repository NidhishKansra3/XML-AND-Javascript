<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match= "/">
    <html>
      <body>
        <h1 style="color: green">Catalog</h1>
        <ul>
          <hgroup>
            <h3><xsl:value-of select="concat('ID: ', //product/@product_id)"/></h3>
            <p><xsl:value-of select="catalog/product/@description"/></p>
          </hgroup>
          <xsl:for-each select="//product">
            <li>
              <article style="margin-bottom: 40px;">
                <table border="2">
                  <tr>
                    <th>Item number</th> 
                    <th>Price</th> 
                    <th>Gender</th> 
                    <th>Small</th> 
                    <th>Medium</th> 
                    <th>Large</th> 
                    <th>Extra Large</th> 
                  </tr> 
                  <xsl:for-each select="//catalog_item"> 
                    <tr>
                      <td><xsl:value-of select="item_number"/></td>
                      <td><xsl:value-of select="price"/></td>
                      <td>
                        <xsl:choose>
                          <xsl:when test= "@gender = 'Women'">W</xsl:when>
                          <xsl:otherwise>M</xsl:otherwise>
                        </xsl:choose>
                      </td>
                      <td>
                       <xsl select="size">
                        <table border='0'>
                          <xsl:if test="size/@description = 'Small'">
                            <tr>
                              <th>Color</th>
                              <th>Image</th>
                            </tr>
                            <xsl:for-each select="size[@description='Small']/color_swatch"> 
                              <tr>
                                <td><xsl:value-of select="."/></td>
                                <td><xsl:value-of select="./@image"/></td>
                              </tr>
                            </xsl:for-each>
                          </xsl:if>
                        </table>
                       </xsl>
                      </td>
                      <td>
                       <xsl select="size">
                        <table border='0'>
                          <xsl:if test="size/@description = 'Medium'">
                            <tr>
                              <th>Color</th>
                              <th>Image</th>
                            </tr>
                            <xsl:for-each select="size[@description='Medium']/color_swatch"> 
                              <tr>
                                <td><xsl:value-of select="."/></td>
                                <td><xsl:value-of select="./@image"/></td>
                              </tr>
                            </xsl:for-each>
                          </xsl:if>
                        </table>
                       </xsl>
                      </td>
                      <td>
                       <xsl select="size">
                        <table style="margin:auto;" border='0'>
                          <xsl:if test="size/@description = 'Large'">
                            <tr>
                              <th>Color</th>
                              <th>Image</th>
                            </tr>
                            <xsl:for-each select="size[@description='Large']/color_swatch"> 
                              <tr>
                                <td><xsl:value-of select="."/></td>
                                <td><xsl:value-of select="./@image"/></td>
                              </tr>
                            </xsl:for-each>
                          </xsl:if>
                        </table>
                       </xsl>
                      </td>
                      <td>
                       <xsl select="size">
                        <table border='0'>
                          <xsl:if test="size/@description = 'Extra Large'">
                            <tr>
                              <th>Color</th>
                              <th>Image</th>
                            </tr>
                            <xsl:for-each select="size[@description='Extra Large']/color_swatch"> 
                              <tr>
                                <td><xsl:value-of select="."/></td>
                                <td><xsl:value-of select="./@image"/></td>
                              </tr>
                            </xsl:for-each>
                          </xsl:if>
                        </table>
                       </xsl>
                      </td>
                    </tr>
                  </xsl:for-each> 
                </table>
              </article>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>